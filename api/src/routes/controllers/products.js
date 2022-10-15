require("dotenv").config();
const {Product, ProductsCategory} = require('../../db');



//ALL PRODUCTS FROM DB:
const allProducts = async() => {
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
        
        return results;
        
    } catch (error) {
        console.log('Problemas en la función productsDb()' + error);
    };
}

//PRODUCTS BY ID:
const productsId = async(idP) => {
    try {
        const totalProducts = await allProducts();

            const productId = totalProducts.find((r) => r.id === idP);
            
            return productId;
        
    }
    catch(err) {
        console.log('Problemas en la función productsId()' + error);
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
            res.send(productsWithName)
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
            return res.send(result);
        } else {
            res.status(404).send('Id no existente')
        };
    }
    catch(err) {
        res.status(404).send('Problemas en el controlador de la ruta GET/products/:id');
    }
   
};



const deleteProduct = async (req, res, next)=>{
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
    }
    
}

module.exports = {getProducts, getProductsId, deleteProduct};