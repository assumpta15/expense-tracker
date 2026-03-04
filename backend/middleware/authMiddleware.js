import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";


export const protect = async (req, res, next) => {
  try {
    let token;

    // Get Bearer token
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({ message: "Not authorized, no token." });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user to request
    req.user = await User.findById(decoded.id).select("-password");

    next(); // allow route to continue

  } catch (error) {
    console.log("AUTH MIDDLEWARE ERROR:", error.message);
    return res.status(401).json({ message: "Not authorized, token failed" });
  }
};
