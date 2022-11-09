const { Router } = require("express");
const { 
  getActivitiesReviews,
  getActivitiesReviewsId,
  addActivitiesReviews,
  getProductsReviews,
  getProductsReviewsId,
  addProductsReviews,
  updateProductsReviews,
} = require("./controllers/reviews");


const router = Router();

//---------------ACTIVITIES----------------------------
router.get("/activities", getActivitiesReviews);
router.get("/activities/:id", getActivitiesReviewsId);
router.post("/activities", addActivitiesReviews)
//---------------PRODUCTS-------------------------------
router.get("/products", getProductsReviews);
router.get("/products/:id", getProductsReviewsId);
router.post("/products", addProductsReviews)
router.patch("/products/:id", updateProductsReviews)

module.exports = router;