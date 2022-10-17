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
                include: {
                    model: Category,
                    attributes: ["name"],
                    throught: {
                        attributes: [],
                    }
                } 
            }); 
                const results = dbProduct?.map((db) => ({
                    id: db.id,
                    name: db.name,
                    price: db.price,
                    detail: db.detail,
                    image: db.image,
                    categories: db.Category?.map((c) => c.name) //me falta probars si se cargan bien las categories, pero necesito lo que hizo Lau para eso
                }));
    
                return results; 
        }        
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
        console.log('Problemas en /:id' + err);
    }
}

//--------------------------------------------------------------------------------------------------------------

// const postProducts = async(req, res) => {
//     const newProducts = req.body;
//     try {
//         await Product.findOrCreate(newProducts); 

//         res.status(200).send('Productos cargados con éxito!');      
//     } catch(error) {
//         res.status(400).send('Error al cargar productos: ' + error)
//     }
// } 

const postProducts = async(req, res) => {
    try{
        const {
            name, 
            price,
            detail,
            image,
            categories
        } = req.body;

        const categoriesLowerCase = categories.map((c) => c.toLowerCase());

        const newProduct = await Product.create({
            name,
            price,
            detail,
            image: image || 'https://img.freepik.com/fotos-premium/deporte-mujer-sentada-descansando-despues-entrenamiento-o-ejercicio-gimnasio-proteina-shak_10307-27.jpg?w=740', 
        }); 
        const category = await Category.findAll({
            where: {
                name: categoriesLowerCase,
            }
        });

        newProduct.addCategory(category);

        return res.send(newProduct);
    } catch (err) {
        console.log('problema para realizar el post: '+ err);
    }
};//EL formato del body debería ser {"results": [array de objetos products]}



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
        } 
        else {
            res.status(200).send(totalProducts);
        }

    } catch (err) {
        console.log(err);
        res.status(404).send('Problemas en el controlador de la ruta GET/products');
    }; 
};



const getProductsId = async(req, res) => {
    try {
        const id = req.params.id;
        console.log(id)
        
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

module.exports = {getProducts, getProductsId, deleteProduct, putProduct, postProducts};
