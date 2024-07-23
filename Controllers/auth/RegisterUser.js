const User = require("../../models/User.js");

async function createUser(req, res) {
  try {
    const { name, email, password, role } = req.body;
    const oneemail = await User.findOne({ email });
    if (oneemail) {
      return res.status(400).json({ message: "email already exist" });
    }

    const saveUser = await new User({
      name,
      email,
      password,
      role,
    });
    await saveUser.save();
    return res.status(200).json({ message: "user is registered successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
}

module.exports = { createUser };
