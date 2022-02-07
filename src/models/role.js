const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const roleSchema = new mongoose.Schema({
    name: { type: String, required: true, lowercase: true },
    description: String,
    state: { type: String, uppercase: true, default: "A" },
    createdat: { type: Date, lowercase: true, default: new Date() }
})
roleSchema.plugin(mongoosePaginate)
const Role = mongoose.model("role", roleSchema);

module.exports = Role;