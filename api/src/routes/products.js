const { Router } = require("express");

const { getProducts, getProductsId, deleteProduct, updateProduct, postProducts } = require("./controllers/products");




const router = Router();


router.get('/', getProducts);
router.get('/:id', getProductsId);
router.post('/', postProducts);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);


module.exports = router;