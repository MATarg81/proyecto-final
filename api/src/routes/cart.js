const { Router } = require("express");

const { postCart, getCart } = require("./controllers/cart");

const router = Router();

router.post('/', postCart);

router.get('/:id', getCart);


module.exports = router;