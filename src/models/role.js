const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const roleSchema = new mongoose.Schema({
    name: { type: String, required: true, lowercase: true },
    description: String,
    state: { type: String, uppercase: true, default: "A" },
},
{ timestamps: true },
)
roleSchema.plugin(mongoosePaginate)
const Role = mongoose.model("role", roleSchema);

module.exports = Role;