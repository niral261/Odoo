// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// // This POST route will help to register a user
// router.post("/register", async (req, res) => {
//     const { email, password, firstName, lastName, username } = req.body;

//     // Check if all required fields are provided
//     if (!email || !password || !firstName || !lastName || !username) {
//         return res.status(400).json({ error: "All fields are required" });
//     }

//     // Check if the user with the same email already exists
//     const existingUser = await User.findOne({ email: email });
//     if (existingUser) {
//         return res.status(403).json({ error: "A user with this email already exists" });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user
//     const newUser = new User({
//         email: email,
//         password: hashedPassword,
//         firstName: firstName,
//         lastName: lastName,
//         username: username
//     });

//     try {
//         // Save the new user to the database
//         await newUser.save();

//         // Generate token for the new user
//         const token = jwt.sign({ email: email }, process.env.JWT_SECRET);

//         // Return success response with user data and token
//         const userToReturn = { ...newUser.toJSON(), token };
//         delete userToReturn.password;
//         return res.status(201).json(userToReturn);
//     } catch (error) {
//         // Handle any errors that occur during user creation or saving
//         console.error("Error creating user:", error);
//         return res.status(500).json({ error: "An error occurred while creating the user" });
//     }
// });

// router.post("/login", async (req,res) => {
//     // Step - 1 : Get E-mail and Password sent by user fromm req.body
//     const {email, password} = req.body;
//     // Step - 2 : Check if a user with the given E-mail exists. If not, the credentials are invalid
//     const user = await User.findOne({email: email});
//     if(!user){
//         return res.status(403).json({err:"Invalid credential"});
//     }
//     // Step - 3 : If the user exists, check if the password is correct. If not, the credentials are invalid
//     // This is a tricky step. why? Because we have stored the original password in hash form which can't be reversed
//     // we can not do, if(pasword == user.password)
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid){
//         return res.status(403).json({err: "Invalid credentials"});
//     }
//     // Step - 4 : If the credentials are correct, return a token to the user.
//     // const token = await getToken(user.email, user);
//     const token = jwt.sign({ email: email }, process.env.JWT_SECRET);
//     const userToReturn = {...User.toJSON(), token};
//     delete userToReturn.password;
//     return res.status(200).json(userToReturn);
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const {getToken} = require("../utils/helpers");

// This POST route will help to register a user
router.post("/register", async (req, res) => {
    // This code is run when the /register api is called as a POST request

    // My req.body will be of the format {email, password, firstName, lastName, username }
    const {email, password, firstName, lastName, username} = req.body;

    // Step 2 : Does a user with this email already exist? If yes, we throw an error.
    const user = await User.findOne({email: email});
    if (user) {
        // status code by default is 200
        return res
            .status(403)
            .json({error: "A user with this email already exists"});
    }
    // This is a valid request

    // Step 3: Create a new user in the DB
    // Step 3.1 : We do not store passwords in plain text.
    // xyz: we convert the plain text password to a hash.
    // xyz --> asghajskbvjacnijhabigbr
    // My hash of xyz depends on 2 parameters.
    // If I keep those 2 parameters same, xyz ALWAYS gives the same hash.
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUserData = {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        username,
    };
    const newUser = await User.create(newUserData);
    console.log(newUserData);

    // Step 4: We want to create the token to return to the user
    const token = await getToken(email, newUser);

    // Step 5: Return the result to the user
    const userToReturn = {...newUser.toJSON(), token};
    console.log(userToReturn);
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
});

router.post("/login", async (req, res) => {
    // Step 1: Get email and password sent by user from req.body
    const {email, password} = req.body;

    // Step 2: Check if a user with the given email exists. If not, the credentials are invalid.
    const user = await User.findOne({email: email});    
    if (!user) {
        return res.status(403).json({err: "Invalid credentials"});
    }

    console.log(user);

    // Step 3: If the user exists, check if the password is correct. If not, the credentials are invalid.
    // This is a tricky step. Why? Because we have stored the original password in a hashed form, which we cannot use to get back the password.
    // I cannot do : if(password === user.password)
    // bcrypt.compare enabled us to compare 1 password in plaintext(password from req.body) to a hashed password(the one in our db) securely.
    const isPasswordValid = await bcrypt.compare(password, user.password);
    // This will be true or false.
    if (!isPasswordValid) {
        return res.status(403).json({err: "Invalid credentials"});
    }

    // Step 4: If the credentials are correct, return a token to the user.
    const token = await getToken(user.email, user);
    const userToReturn = {...user.toJSON(), token};
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
});

module.exports = router;