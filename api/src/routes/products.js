const { Router } = require("express");
const { getProducts, getProductsId, deleteProduct } = require("./controllers/products");



const router = Router();

router.get('/', getProducts);
router.get('/:id', getProductsId);
router.delete('/:id', deleteProduct);

module.exports = router;
