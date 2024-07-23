const User = require("../../models/User.js");

async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const updated = await User.findByIdAndUpdate(id, req.body);
    if (!updated) {
      return res.status(400).json({ message: "user is not updated" });
    }
    return res.status(200).json({ messsage: "user is updated successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
}

module.exports = { updateUser };

