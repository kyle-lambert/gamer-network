const jwt = require("jsonwebtoken");

async function auth(req, res, next) {
  const token = req.header("x-auth-token");

  if (!token) {
    return res
      .status(404)
      .json({ errors: [{ msg: "Authorisation denied, no token provided" }] });
  }

  try {
    const decodedPayload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedPayload;

    next();
  } catch (error) {
    return res.status(500).json({ errors: [{ msg: "Server error" }] });
  }
}

module.exports = auth;
