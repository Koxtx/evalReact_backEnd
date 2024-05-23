const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Token is invalid
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401); // No token provided
  }
};

module.exports = authMiddleware;
