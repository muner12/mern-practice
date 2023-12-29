const express=require("express");
//controllers
const {service,serviceList}=require("../controller/service-controller");
const auth = require("../controller/auth-controller");
const contact=require("../controller/contact-controller");
//middlewares
const validate=require("../middleware/validate-middleware");
const authMiddleware=require("../middleware/auth-middleware");
//validation zod schemas
const signUpSchema=require("../validators/auth-validator");

const router=express.Router();
//auth routes
router.route("/auth/register").post(validate(signUpSchema),auth.register);
router.route("/auth/login").post(auth.login);
router.route("/auth/user").get(authMiddleware,auth.user);

//services Routes
router.route("/services").post(service);
router.route("/servicesList").get(serviceList);

//Contact Routes

router.route("/contact").post(contact);
module.exports=router;