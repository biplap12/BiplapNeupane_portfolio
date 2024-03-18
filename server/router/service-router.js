const express = require("express");
const services = require("../controllers/service-controller");
const { serviceSchema } = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
const router = express.Router();

router.route("/service").get(services.services);
router.route("/addService").post(validate(serviceSchema), services.addService);


module.exports = router;
