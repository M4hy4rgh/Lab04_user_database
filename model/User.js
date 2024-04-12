const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 4,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => /\S+@\S+\.\S+/.test(value),
      message: "Invalid email address.",
    },
  },
  city: {
    type: String,
    required: true,
    validate: {
      validator: (value) => /^[a-zA-Z ]+$/.test(value),
      message: "City name can only contain alphabets and spaces.",
    },
  },
  website: {
    type: String,
    required: true,
    validate: {
      validator: (value) => /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(value),
      message: "Invalid web URL address.",
    },
  },
  zipCode: {
    type: String,
    required: true,
    validate: {
      validator: (value) => /^\d{5}-\d{4}$/.test(value),
      message: "Invalid zip code format. It must be like 12345-1234.",
    },
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: (value) => /^1-\d{3}-\d{3}-\d{4}$/.test(value),
      message: "Invalid phone format. It must be like 1-123-123-1234.",
    },
  },
});

module.exports = mongoose.model("User", userSchema);
