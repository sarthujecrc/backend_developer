const User = require("../../models/User.js");

async function allUser(req, res) {
  try {
    const user = await User.find();
    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }
    return res.status(200).json({ message: "user is get" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}

module.exports = {allUser};