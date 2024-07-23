const User = require("../../models/User.js");

async function oneUser(req, res) {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) {
      return res.status(400).json({ message: " user is get" });
    }
    return res.status(200).json({ message: "user is get" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}

module.exports = {oneUser}
