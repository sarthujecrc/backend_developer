const Users = require("../../models/User.js");

async function finalUser(req, res) {
  try {
    const { name, email, password, role } = req.query;
    const nameRegex = new RegExp(name, "i");
    const emailRegex = new RegExp(email, "i");
    const query = { name: nameRegex, email: emailRegex };
    if (password) {
      query.password = password;
    }
    if (role) {
      query.role = role;
    }
    const userResult = await User.find(query);
    return res.status(200).json({ message: "user is searched successfully" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "internal server error" });
  }
}
module.exports = { finalUser };
