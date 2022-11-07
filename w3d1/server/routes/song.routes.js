const songs = require('../controllers/song.controller');

module.exports = (app) => {
    app.get("/api/songs/", songs.findAllSongs);
    app.get("/api/songs/random", songs.findRandomSong);
    app.get("/api/songs/:id", songs.findOneSongById);
    app.post("/api/songs/", songs.createNewSong);
    app.put("/api/songs/:id", songs.findSongAndUpdate);
    app.delete("/api/songs/:id", songs.findOneSongAndDelete);
}