const { Router } = require("express");

const { postCart } = require("./controllers/cart");

const router = Router();

router.post('/', postCart);


module.exports = router;