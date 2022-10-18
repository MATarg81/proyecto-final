const { Router } = require("express");
const {getCategory, getAllCategories }= require("./controllers/category");

//Trae todos los Category desde la DB

const router = Router();

router.get("/", getCategory);
router.get('/getAll', getAllCategories)

module.exports = router;