const { Router } = require("express");
const { 
  getActivitiesReviews,
  getActivitiesReviewsId,
  addActivitiesReviews,
  getProductsReviews,
  getProductsReviewsId,
  addProductsReviews
} = require("./controllers/reviews");


const router = Router();

router.get("/activities", getActivitiesReviews);
router.get("/activities/:id", getActivitiesReviewsId);
router.post("/activities", addActivitiesReviews)
router.get("/products", getProductsReviews);
router.get("/products/:id", getProductsReviewsId);
router.post("/products", addProductsReviews)

module.exports = router;