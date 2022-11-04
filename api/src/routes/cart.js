const { Router } = require("express");

const { postCart, getCart, getAllCart, cartDetail } = require("./controllers/cart");

const router = Router();

router.post('/', postCart);

router.get('/:id', getCart);
router.get('/', getAllCart)
router.get('/detail/:id', cartDetail)


module.exports = router;