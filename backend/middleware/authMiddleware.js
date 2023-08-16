import jwt from "jsonwebtoken";
const User = require("../model/userModel");

const authMiddleware = async (req, res, next) => {
  const registerEmail = await User.findOne({
    email: req.boby.email,
  });
  
  try {
    if (!req.body.email) {
      return res.json({
        error: "email is required",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
