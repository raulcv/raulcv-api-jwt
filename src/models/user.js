const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require('bcrypt')
const mongoosePaginate = require("mongoose-paginate-v2");
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastname: String,
  username: String,
  email: {
    type: String, lowercase: true, unique: true, required: true,
    validate: { validator: validator.isEmail, message: 'EMAIL_IS_NOT_VALID' }
  },
  password: { type: String, required: true, selected: false },
  verification: { type: String },
  verified: { type: String, required: false },
  phone: { type: String },
  city: { type: String },
  country: { type: String },
  roles: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "role"
  }],

  urlTwitter: {
    type: String,
    validate: {
      validator(v) {
        return v === '' ? true : validator.isURL(v)
      }, message: 'NOT_A_VALID_URL'
    },
    lowercase: true
  },
  urlGitHub: {
    type: String,
    validate: {
      validator(v) {
        return v === '' ? true : validator.isURL(v)
      }, message: 'NOT_A_VALID_URL'
    },
    lowercase: true
  },
  loginAttempts: { type: Number, default: 0, select: false },
  blockExpires: { type: Date, default: Date.now, select: false }
},
  {
    versionKey: false,
    timestamps: true
  }
)
const hash = (user, salt, next) => {
  bcrypt.hash(user.password, salt, (error, newHash) => {
    if (error) {
      return next(error)
    }
    user.password = newHash
    return next()
  })
}
const genSalt = (user, SALT_FACTOR, next) => {
  bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
    if (err) {
      return next(err)
    }
    return hash(user, salt, next)
  })
}

UserSchema.pre('save', function (next) {
  const that = this
  const SALT_FACTOR = 5
  if (!that.isModified('password')) {
    return next()
  }
  console.log(that)
  return genSalt(that, SALT_FACTOR, next)
})

UserSchema.methods.comparePassword = function (passwordAttempt, cb) {
  bcrypt.compare(passwordAttempt, this.password, (err, isMatch) =>
    err ? cb(err) : cb(null, isMatch)
  )
}

UserSchema.plugin(mongoosePaginate)
const User = mongoose.model("user", UserSchema);

module.exports = User;