require("dotenv").config();
const {Product, ProductsCategory} = require('../../db');



//PRODUCTS DB:
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