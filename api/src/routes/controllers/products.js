require("dotenv").config();
const {Product, Category} = require('../../db');
const jsonData = require("../../../products.json");

//SIEMPRE ES NECESARIO EL POST/products PARA EMPEZAR, HASTA QUE CAMBIEMOS EL FORCE:TRUE


//ALL PRODUCTS FROM DB:
const allProducts = async() => {

    const dbData = await Product.count();

    try {
        if (!dbData) {   
            const results = await Product.bulkCreate(jsonData.results);
            return results;
       
        } else {
            const dbProduct = await Product.findAll({
                include: Category 
            }); 
            return dbProduct;

        }        
    } catch (error) {
        console.log('Problemas en la función productsDb()' + error);
    };
}


//PRODUCTS BY ID:
const productsId = async(idP) => {
    try {

        const totalProducts = await allProducts();
            const productId = totalProducts.find((r) => r.id.toString() === idP);
            console.log(productId)
            
            return productId;
        
    }
    catch(err) {
        console.log('Problemas en /:id' + err);
    }
}

//--------------------------------------------------------------------------------------------------------------

const postProducts = async(req, res) => {
    
    try{
        const {
            name, 
            price,
            detail,
            image,
            categories
        } = req.body;

        //const categoriesLowerCase = categories?.map((c) => c.toLowerCase());


        const newProduct = await Product.create({
            name: name,
            price: price,
            detail: detail,
            image: image || 'https://img.freepik.com/fotos-premium/deporte-mujer-sentada-descansando-despues-entrenamiento-o-ejercicio-gimnasio-proteina-shak_10307-27.jpg?w=740', 
        }); 

        newProduct.addCategory(categories);

        return res.send(newProduct);
    } catch (err) {
        console.log('problema para realizar el post: '+ err);
    }
};//EL formato del body debería ser {"results": [array de objetos products]}



const getProducts = async(req, res) => {
 
    try {
        const qname = req.query.name;
        const totalProducts = await allProducts();
        const dbData = await Product.findAll({include: Category});
        
        if(qname) {
            const productsWithName = totalProducts.filter((r) => r.name.toLowerCase().includes(qname.toLowerCase()));
            (productsWithName.length) ?
            res.status(200).send(productsWithName)
            : res.status(404).send('Producto no encontrada');            
        } 
        else {

            res.status(200).send(dbData);
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
    }
}


const putProduct = async (req, res) => {
    const idP = req.params.id;
    
    const {
        name: name, 
        price: price,
        detail: detail,
        image: image
    } = req.body;

    try {

        await Product.update({
            name,
            price,
            detail,
            image
        }, {
        where: {
            id: Number(idP),
        }});
        res.status(200).send("Producto actualizado con éxito");
    } catch (error) {
        res.status(400).send(error.JSON);
    }
}

module.exports = {getProducts, getProductsId, deleteProduct, putProduct, postProducts};
