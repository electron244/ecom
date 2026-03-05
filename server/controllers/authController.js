import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";


// generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d"
  });
};


// REGISTER USER
export const registerUser = async (req, res) => {
  try {

    const { name, email, password } = req.body;

    // validation
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Please provide all fields"
      });
    }

    // check existing user
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    // create user
    const user = await User.create({
      name,
      email,
      password
    });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id)
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

export const loginUser = async (req, res) => {
  try {

    const { email, password } = req.body;

    // check fields
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password required"
      });
    }

    // check user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    // return user + token
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id)
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};