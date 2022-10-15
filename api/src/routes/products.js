const { Router } = require("express");
<<<<<<< HEAD
const { getProducts, getProductsId, deleteProduct, putProduct } = require("./controllers/products");
=======
const {allProducts, productsId} = require('./controllers/products');
const {Product} = require ('../db');
// const { Op, Association } = require("sequelize");
>>>>>>> 205beb69c59476c800d2acd89d3dae23e999e794



const router = Router();

router.get('/', getProducts);
router.get('/:id', getProductsId);

router.put('/:id', putProduct);

<<<<<<< HEAD
router.delete('/:id', deleteProduct);

=======
router.get('/', allProducts)

// router.get("/", async(req, res) => {
 
//     try {
//         const qname = req.query.name;
//         const totalProducts = await allProducts();
//         ;
//         if(qname) {
//             const productsWithName = totalProducts.filter((r) => r.name.toLowerCase().includes(qname.toLowerCase()));
//             (productsWithName.length) ?
//             res.send(productsWithName)
//             : res.status(404).send('Producto no encontrada');            
//         } else {
//             res.send(totalProducts);
//         }

//     } catch (err) {
//         console.log(err);
//         res.status(404).send('Problemas en el controlador de la ruta GET/products');
//     }; 
// });


router.get('/:id', async(req, res) => {
    try {
        const id = req.params.id;
        
        const result = await productsId(id);
        if (result) {
            return res.send(result);
        } else {
            res.status(404).send('Id no existente')
        };
    }
    catch(err) {
        res.status(404).send('Problemas en el controlador de la ruta GET/products/:id');
    }
   
})
>>>>>>> 205beb69c59476c800d2acd89d3dae23e999e794

module.exports = router;
