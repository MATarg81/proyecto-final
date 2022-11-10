const { Router } = require("express");
const {
  getCategory,
  getAllCategories,
  addCategory,
} = require("./controllers/category");

//Trae todos los Category desde la DB

const router = Router();

router.get("/", getCategory);
router.get("/getAll", getAllCategories);
router.post("/", addCategory);

module.exports = router;
