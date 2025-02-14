const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.signup = async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ UserName: username });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User Already Exits",
      });
    }

    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Error in hashing the password",
      });
    }

    const newUser = new User({
      UserName: username,
      password: hashedPassword,
    });
    await newUser.save();

    return res.status(200).json({
      success: true,
      message: "User Created Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "User cannot be registered... Please Try again later",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Not Filled all the details",
      });
    }

    let user = await User.findOne({ UserName: username });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User does not exits",
      });
    }

    const payload = {
      UserName: user.UserName,
      id: user._id,
    };

    if (await bcrypt.compare(password, user.password)) {
      let token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });
      user = user.toObject();
      user.token = token;
      user.password = undefined;

      return res.status(200).json({
        success: true,
        token,
        user,
        message: "User Logged In successfully",
      });
    } else {
      return res.status(403).json({
        success: false,
        message: "Password Incorrect",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Login Failed",
    });
  }
};
