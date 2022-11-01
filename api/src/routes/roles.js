const { Router } = require("express");
const {getRoles} = require("./controllers/role");
const { updateRoles } = require("./controllers/role");


//Trae todos los roles desde la DB

const router = Router();

router.get("/", getRoles);
router.patch("/", updateRoles)

module.exports = router;