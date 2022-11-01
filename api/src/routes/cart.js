const { Router } = require("express");

const { postCart, getCart, getAllCart } = require("./controllers/cart");

const router = Router();

router.post('/', postCart);

router.get('/:id', getCart);
router.get('/', getAllCart)


module.exports = router;