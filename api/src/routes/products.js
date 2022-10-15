const { Router } = require("express");
const { getProducts, getProductsId, deleteProduct, putProduct } = require("./controllers/products");



const router = Router();

router.get('/', getProducts);
router.get('/:id', getProductsId);

router.put('/:id', putProduct);

router.delete('/:id', deleteProduct);


module.exports = router;