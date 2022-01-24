const mongoose = require("mongoose");
const validator = require("validator");
const mongoosePaginate = require("mongoose-paginate-v2");
const UserSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    username: String,
    email: {
        type: String, lowercase: true, unique: true, required: true,
        validate: { validator: validator.isEmail, message: 'EMAIL_IS_NOT_VALID' }
    },
    password: String,
    verification: { type: String },
    roles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "role"
        }
    ]
})
UserSchema.plugin(mongoosePaginate)
const User = mongoose.model("user", UserSchema);
module.exports = User;