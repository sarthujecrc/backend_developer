function verifyRole(role) {
  if (req.user && req.user.role === role) {
    return next();
  }
  return res.status(200).json({ message: "user is authorised" });
}

