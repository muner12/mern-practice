const epxress=require("express");
const validate=require("../middleware/validate-middleware")
const {service,serviceList}=require("../controller/service-controller");
//const serviceValidatorSchema=require("../validators/service-validator");
const serviceRouter=epxress.Router();

serviceRouter.route("/services").post(service);
serviceRouter.route("/servicesList").get(serviceList);

module.exports=serviceRouter;