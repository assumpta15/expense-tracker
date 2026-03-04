import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// REGISTER USER
// REGISTER USER
export const registerUser = async (req, res) => {
  console.log("REGISTER USER FUNCTION LOADED");   // <-- ADD THIS LINE HERE

  const { fullName, email, password, profileImageUrl } = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const user = await User.create({
      fullName,
      email,
      password,
      profileImageUrl,
    });

    return res.status(201).json({
      id: user._id,
      user,
      token: generateToken(user._id),
    });

  } catch (error) {
    console.log("REGISTER ERROR:", error);   // <-- ADD DEBUG LOG HERE TOO
    return res
      .status(500)
      .json({ message: "Error registering user.", error: error.message });
  }
};


// LOGIN USER
export const loginUser = async (req, res) => {
  //return res.json({ message: "Login route working" });

  const {email, password} = req.body;

  if(!email || !password) {
    return res.status(400).json({message: "All fields are required"});
  }
  try {
    const user = await User.findOne({ email});

    if (!user || !(await user.comparePassword(password))){
      return res.status(400).json({ message: "Invalid credentials"});
    }

    res.status(200).json({
      id: user._id,
      user,
      token: generateToken(user._id),

    });
  } catch (error) {
    console.log("LOGIN ERROR:", error);  
    return res
      .status(500)
      .json({ message: "Error registering user.", error: error.message });
  }
};

// GET USER INFO
export const getUserInfo = async (req, res) => {
  // return res.json({ message: "User info route working" });

  try {
    const user = await User.findById(req.user.id).select("-password");

    if(!user){
      return res.status(401).json({ message: "User not found"});
    }

    res.status(200).json(user);
  } catch (error) {
    console.log("ERROR:", error);   
    return res
      .status(500)
      .json({ message: "Error registering user.", error: error.message });
  
  }
};
