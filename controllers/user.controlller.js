const User = require("../models/user");
let config = require("config");
let secret = config.get("secret");
let bc = require("bcryptjs");
let jwt = require("jsonwebtoken");
exports.singUp = async (req, res) => {
  try {
    let { fullName, email, password, number } = req.body;
    let exestingUser = await User.findOne({ email });
    if (exestingUser) {
      res.status(400).json({ msg: "user is orledy exiest" });
    }
    let newUser = new User({
      fullName,
      email,
      password,
      number,
    });
    let salt = await bc.genSalt(10);
    let hash = await bc.hashSync(password, salt);
    newUser.password = hash;
    await newUser.save();
    let payload = {
      id: newUser._id,
      fullName: newUser.fullName,
    };
    let token = jwt.sign(payload, secret);
    res.send({
      token,
      id: newUser._id,
      fullName: newUser.name,
      email: newUser.email,
      password: newUser.password,
      number: newUser.number,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
exports.login = async (req,res) => {
  let { email, password } = req.body;
  try {
    let existingUser = await User.findOne({ email });
    if (!existingUser) {
      res.status(400).json({ msg: "invalid email or password" });
    }
    let isMatch = await bc.compare(password, existingUser.password);
    if (!isMatch) {
      res.status(400).json({ msg: "invalid email or password" });
    }
    let payload = {
      fullName: existingUser.fullName,
      id: existingUser._id,
    };
    let token = jwt.sign(payload,secret)
    res.send({
        token,
        user:{
            id: existingUser._id,
       
        email: existingUser.email,
        fullName: existingUser.fullName,
        password: existingUser.password,
        }
      })
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.getUser=(req,res)=>{
res.send(req.user)
}