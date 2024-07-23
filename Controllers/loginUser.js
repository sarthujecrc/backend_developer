const User = require("../models/User.js");
const jwt = require("jsonwebtoken");
const config = require("../config/default.js");

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: " user is found" });
    }
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        password: user.password,
      },
      config.SECRET_KEY,
      { expiresIn: "15D" }
    );
    return res.status(200).json({ message: "user is logined successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}

module.exports = {login};