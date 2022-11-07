const { Router } = require("express");
const { stripePay } = require("./controllers/stripeController");

const router = Router();

router.post("/", stripePay);

module.exports = router;
