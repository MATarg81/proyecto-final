require("dotenv").config();
const {Product, ProductsCategory} = require('../../db');



<<<<<<< HEAD
//ALL PRODUCTS FROM DB:
const allProducts = async() => {
=======
//PRODUCTS DB:
const allProducts = async() => {
    const qname = req.query.name;

>>>>>>> 205beb69c59476c800d2acd89d3dae23e999e794
    try {
        const dbProduct = await Product.findAll({
            include: {
                model: ProductsCategory,
                attributes: ["name"],
                throught: {
                    attributes: [],
                }
            }
        }); 
         const results = dbProduct.map((db) => ({
            id: db.id,
            name: db.name,
            price: db.price,
            detail: db.detail,
            image: db.image,
            categories: db.ProductsCategory.map((t) => t.name),
        }));
        
<<<<<<< HEAD
        return results;
=======
        if(qname) {
            const productsWithName = results.filter((r) => r.name.toLowerCase().includes(qname.toLowerCase()));
            (productsWithName.length) ?
            res.send(productsWithName)
            : res.status(404).send('Producto no encontrada');            
        } else {
            res.send(results);
        }

        //return results;
>>>>>>> 205beb69c59476c800d2acd89d3dae23e999e794
        
    } catch (error) {
        console.log('Problemas en la función productsDb()' + error);
    };
}

<<<<<<< HEAD
//PRODUCTS BY ID:
=======

//RECIPES POR ID:
>>>>>>> 205beb69c59476c800d2acd89d3dae23e999e794
const productsId = async(idP) => {
    try {
        const totalProducts = await allProducts();

            const productId = totalProducts.find((r) => r.id === idP);
            
            return productId;
        
    }
    catch(err) {
<<<<<<< HEAD
        console.log('Problemas en /:id' + err);
    }
}

//--------------------------------------------------------------------------------------------------------------

const getProducts = async(req, res) => {
 
    try {
        const qname = req.query.name;
        const totalProducts = await allProducts();
        ;
        if(qname) {
            const productsWithName = totalProducts.filter((r) => r.name.toLowerCase().includes(qname.toLowerCase()));
            (productsWithName.length) ?
            res.status(200).send(productsWithName)
            : res.status(404).send('Producto no encontrada');            
        } else {
            res.send(totalProducts);
        }

    } catch (err) {
        console.log(err);
        res.status(404).send('Problemas en el controlador de la ruta GET/products');
    }; 
};



const getProductsId = async(req, res) => {
    try {
        const id = req.params.id;
        
        const result = await productsId(id);
        if (result) {
            return res.status(200).send(result);
        } else {
            res.status(404).send('Id no existente')
        };
    }
    catch(err) {
        res.status(404).send('Problemas en el controlador de la ruta GET/products/:id');
    }
   
};



const deleteProduct = async (req, res)=>{
    const { id } = req.params;
    try {
      await  Product.destroy({
        where:{
            id:id,
        }
      })
      res.status(200).send('Producto eliminado')
    } catch (error) {
        res.status(400).send('error')
=======
        console.log('Problemas en la función productsId()' + error);
>>>>>>> 205beb69c59476c800d2acd89d3dae23e999e794
    }
}


<<<<<<< HEAD
const putProduct = async (req, res) => {
    const {id} = req.params;
    const productUpdated = req.body;
    try {
        await Product.update({
            productUpdated,
        }, {
        where: {
            id: id,
        }});
        res.status(200).json(productUpdated);
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = {getProducts, getProductsId, deleteProduct, putProduct};
=======

module.exports = {allProducts, productsId};
>>>>>>> 205beb69c59476c800d2acd89d3dae23e999e794
