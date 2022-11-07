const { Router } = require("express");
const stripe = require("./controllers/temp");

const router = Router();

router.post("/stripe", stripe);

module.exports = router;