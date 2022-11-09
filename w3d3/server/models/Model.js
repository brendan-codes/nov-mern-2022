const mongoose = require("mongoose");

const SundaeSchema = new mongoose.Schema({
    flavor: {
        type: String,
        minLength: [3, "Flavor must be 3 characters or more!"]
    },
    coneType: {
        type: String,
        required: true
    },
    scoops: {
        type: Number,
        min: [1, "You must have at least one scoop!"],
        max: [3, "Max of three scoops!"]
    },
    nuts: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

const Sundae = mongoose.model("Sundae", SundaeSchema);
module.exports = Sundae;