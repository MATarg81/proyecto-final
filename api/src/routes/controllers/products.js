require("dotenv").config();
const {Product, ProductsCategory} = require('../../db');



//PRODUCTS DB:
const allProducts = async() => {
    const qname = req.query.name;

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
        
        if(qname) {
            const productsWithName = results.filter((r) => r.name.toLowerCase().includes(qname.toLowerCase()));
            (productsWithName.length) ?
            res.send(productsWithName)
            : res.status(404).send('Producto no encontrada');            
        } else {
            res.send(results);
        }

        //return results;
        
    } catch (error) {
        console.log('Problemas en la función productsDb()' + error);
    };
}


//RECIPES POR ID:
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



module.exports = {allProducts, productsId};