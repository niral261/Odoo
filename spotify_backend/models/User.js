const mongoose = require("mongoose");
// How to create a model
// Step - 1 : require mongoose
// Step - 2 : create a mongoose schema (structure of a user)
// Step - 3 : create a model

const User = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        private: true,
    },

    lastName: {
        type: String,
        required: false,    //By default Flase
    },
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    Likedsongs: {
        type: String,    // We will change this error later
        default: "",
    },
    likedplaylist: {
        type: String,     // We will change this error later
        default: "",
    },
    subscribedArtist: {
        type: String,    // We will change this error later
        default: "",
    },

});

const UserModel = mongoose.model("User", User);
module.exports = UserModel;