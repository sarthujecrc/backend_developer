const express = require("express");
const {
  addUser,
  deleteUser,
  allUser,
  oneUser,
  finalUser,
  updateUser,
} = require("../Controllers/User/index.js");

const userRoutes = express.Router();

// end points
userRoutes.get("/one/:id", finalUser);
userRoutes.post("/add", addUser);
userRoutes.delete("/delete/:id", deleteUser);
userRoutes.get("/all", allUser);
userRoutes.put("/updated/:id", updateUser);
userRoutes.get("/onlyUser/:id", oneUser);

module.exports = userRoutes;
