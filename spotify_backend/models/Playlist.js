const mongoose = require("mongoose");
// How to create a model
// Step - 1 : require mongoose
// Step - 2 : create a mongoose schema (structure of a user)
// Step - 3 : create a model

const Playlist = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    // 1. Playlist has which songs
    // 2. Playlist collaborators
    songs: [
        {
        type: mongoose.Types.ObjectId,
        ref: "song",
        },
    ],
    collaborators: [
        {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
    ],
});

const PlaylistModel = mongoose.model("Playlist", Playlist);
module.exports = PlaylistModel