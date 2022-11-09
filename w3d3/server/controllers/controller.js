module.exports.index = (request, response) => {
    response.json({
       message: "Hello World"
    });
}

// const Song = require('../models/song.model');

// module.exports.findAllSongs = (req, res) => {
//     Song.find()
//         .then(songs => res.json(songs))
//         .catch(err => res.json({error: err}))
// }

// module.exports.findOneSongById = (req, res) => {
//     Song.findOne({_id: req.params.id})
//         .then(oneSong => res.json({oneSongById: oneSong}))
//         .catch(err => res.json({error: err}))
// }

// module.exports.createNewSong = (req, res) => {
//     Song.create(req.body)
//         .then(newSong => res.json({newSong: newSong}))
//         .catch(err => res.json({error: err}))
// }

// module.exports.findSongAndUpdate = (req, res) => {
//     Song.findOneAndUpdate({_id: req.params.id}, req.body,  { new: true, runValidators: true })
//         .then(data => res.json({data: data}))
//         .catch(err => res.json({error: err}))
// }

// module.exports.findOneSongAndDelete = (req, res) => {
//     Song.deleteOne({_id: req.params.id})
//         .then(result => res.json({result: result}))
//         .catch(err => res.json({error: err}))
// }

// module.exports.findRandomSong = (req, res) => {
//     Song.find()
//         .then(songs => {
//             const randomSongIndex = Math.floor(Math.random() * songs.length);
//             res.json({result: songs[randomSongIndex]})
//         })
//         .catch(err => res.json({error: err}))
// }