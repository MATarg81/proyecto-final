const { Router } = require("express");
const { 
  getReviews,
  getReviewsId,
  addReviews
} = require("./controllers/reviews");


const router = Router();

router.get("/", getReviews);
router.get("/:id", getReviewsId);
router.post("/", addReviews)

module.exports = router;