const { Router } = require("express");
const getCategory = require("./controllers/category");

//Trae todos los Category desde la DB

const router = Router();

router.get("/", getCategory);

module.exports = router;