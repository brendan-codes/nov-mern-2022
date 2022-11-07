const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
    artist: "String",
    title: "String" 
}, {timestamps: true})

const Song = mongoose.model("Song", SongSchema);

module.exports = Song;