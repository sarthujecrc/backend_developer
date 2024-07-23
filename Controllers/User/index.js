const { addUser } = require("./addUserController");
const { deleteUser } = require("./deleteUserController");
const { allUser } = require("./getUserController");
const { oneUser } = require("./oneUserController");
const { finalUser } = require("./searchUserController");
const { updateUser } = require("./updateUserController");

module.exports = {
  addUser,
  deleteUser,
  allUser,
  oneUser,
  finalUser,
  updateUser,
};


