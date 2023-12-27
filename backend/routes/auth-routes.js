const express=require("express");
const auth = require("../controller/auth-controller");
const signUpSchema=require("../validators/auth-validator");
const validate=require("../middleware/validate-middleware");
const router=express.Router();

router.route("/auth/register").post(validate(signUpSchema),auth.register);
router.route("/auth/login").post(auth.login);
router.route("/auth/user").get(authMiddleware,auth.user);
//comment
//comment 2
//comment 3
module.exports=router;