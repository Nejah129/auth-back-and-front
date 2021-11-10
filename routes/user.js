let express=require("express");
const { singUp, login, getUser } = require("../controllers/user.controlller");
const { isAuth } = require("../middleware/auth");
const { singUpRules,validator } = require("../middleware/validator");
let router=express.Router();



router.post("/signup",singUpRules(),validator,singUp)
router.post("/login",login)
router.get("/get",isAuth,getUser)
module.exports=router