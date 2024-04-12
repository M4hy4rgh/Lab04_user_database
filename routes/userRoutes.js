// userRoutes.js

const express = require("express");
const router = express.Router();
const User = require("./model/User");

// post request to create a new user
router.post("/users", async (req, res) => {
  const userData = req.body;

  try {
    // Validate user input against the User schema
    const newUser = new User(userData);
    await newUser.validateSync();

    // If validation passes, save the user to the database
    await newUser.save();

    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
