const { Router } = require("express");
const { 
  getReviews, 
  addReviews
} = require("./controllers/reviews");


const router = Router();

router.get("/", getReviews);
router.post('/', addReviews)

module.exports = router;