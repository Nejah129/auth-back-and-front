let jwt = require("jsonwebtoken");
let config = require("config");
const User = require("../models/user");
let secret = config.get("secret");
exports.isAuth = async(req, res, next) => {
  let token = req.headers.authorization
  try {
    let decoded = jwt.verify(token, secret);
    let user = await User.findById(decoded.id);
    if (!user) {
      res.status(400).json({ msg: "not auth" });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
