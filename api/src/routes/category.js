const { Router } = require("express");
const {getCategory, addCategory }= require("./controllers/category");

//Trae todos los Category desde la DB

const router = Router();

router.get("/", getCategory);
router.post('/', addCategory)

module.exports = router;