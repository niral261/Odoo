const express = require("express");
const mongoose = require("mongoose");
const JwtStrategy = require("passport-jwt").Strategy,
    ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
const User = require("./models/User");
const AuthRoutes = require("./Routes/Auth");
const songRoutes = require("./Routes/song");
const playlistRoutes = require("./Routes/playlist");
require("dotenv").config();
const cors = require("cors");
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

// connect mongodb to our node app.
// mongoose.connect() takes 2 arguments : 1. Which db to connect to (db url), 2. 2. Connection options
mongoose
    .connect(
        "mongodb+srv://MannShah:" +
        process.env.MONGO_PASSWORD +
        "@cluster0.w7gzuhv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then((x) => {
        console.log("Connected to Mongo!");
    })
    .catch((err) => {
        console.log("Error while connecting to Mongo");
    });

let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "thisKeyIsSupposedToBeSecret";
passport.use(
    new JwtStrategy(opts, async function (jwt_payload, done) {
        try {
            const user = await User.findOne({_id: jwt_payload.identifier});
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
                // or you could create a new account
            }
        } catch (err) {
            return done(err, false);
        }
    })
);
    

// API : GET type : / : return text "Hello world"
app.get("/", (req, res) => {
    // req contains all data for the request
    // res contains all data for the response
    res.send("Hello World");
});
app.use("/Auth", AuthRoutes);
app.use("/song", songRoutes);
app.use("/playlist", playlistRoutes);

// Now we want to tell express that our server will run on localhost:8000
app.listen(port, () => {
    console.log("App is running on port " + port);
});