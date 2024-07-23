const User = require("../../models/User");

async function deleteUser(req, res) {
  try {
    const id = req.params.id;
    const removeUser = await User.findByIdAndDelete(id);
    if (!removeUser) {
      return res.status(400).json({ message: " user is not removed" });
    }
    return res.status(200).json({ message: "user is deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}


module.exports = {deleteUser}