const User = require("../../models/User.js");

async function addUser(req, res) {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: "all fields are required" });
    }
    const saveUser = await new User({
      name,
      email,
      password,
      role,
    });
    await saveUser.save();
    return res.status(200).json({ message: "user is created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}

module.exports = { addUser };
