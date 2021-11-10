const { check, validationResult } = require("express-validator");

exports.singUpRules = () => [
  check("fullName", "this field is require").notEmpty(),
  check("email", "this shuld be a vlaid email").isEmail(),
  check("email", "this shuld be a vlaid email").notEmpty(),
  check("password", "the langth should be at least 5 chars").isLength({
    min: 5,
  }),
];

exports.validator=(req,res,next)=>{
let errors=validationResult(req)
return errors.isEmpty()?next():res.status(400).json({errors:errors.array()})
}