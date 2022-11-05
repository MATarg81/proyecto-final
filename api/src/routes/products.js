const { Router } = require("express");

const { getProducts, getProductsId, deleteProduct, putProduct, postProducts } = require("./controllers/products");




const router = Router();


router.get('/', getProducts);
router.get('/:id', getProductsId);
router.post('/', postProducts);
router.patch('/', putProduct);
router.delete('/:id', deleteProduct);


module.exports = router;