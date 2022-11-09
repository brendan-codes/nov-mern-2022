// const mongoose = require('mongoose');
// const ModelSchema = new mongoose.Schema({
//     // firstName: { type: String },
//     // lastName: { type: String }
// }, { timestamps: true });

// module.exports.Model = mongoose.model('Model', ModelSchema);


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

module.exports.Sundae = mongoose.model("Sundae", SundaeSchema);