const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
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