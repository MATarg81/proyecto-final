const express = require("express");
const router = express.Router();

const PaymentController = require("./controllers/paymentController");
const PaymentService = require("./controllers/paymentService");
const PaymentInstance = new PaymentController(new PaymentService());

const payment = async (req, res, next) => {
  const products = req.body
  PaymentInstance.getPaymentLink(req, res, products)
}


/* GET home page. */
router.get("/", function (req, res, next) {
  return res.json({
    "/payment": "generates a payment link",
    "/subscription": "generates a subscription link",
  });
});

router.post("/payment", function (req, res, next) {
  PaymentInstance.getPaymentLink(req, res);
});

router.post("/subscription", function (req, res, next) {
  PaymentInstance.getSubscriptionLink(req, res);
});

module.exports = router;

module.exports = {payment}