const express = require("express");
const config = require("../config/default.js");

const startServer = async (app) => {
  try {
    const { HOST, PORT } = config;
    app.listen(PORT, () => {
      console.log(`app is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
};

module.exports = startServer;
