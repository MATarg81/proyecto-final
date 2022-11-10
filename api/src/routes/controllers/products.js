require("dotenv").config();
const { Product, Category } = require("../../db");
const jsonData = require("../../../products.json");
const { Op } = require("sequelize");

const allProducts = async() => {
    try {
        const dbProduct = await Product.findAll({
            include: {
                model: Category,
                attributes: ["name"],
                throught: {
                    attributes: [],
                }
            }
        }); 
         const results = dbProduct.map((p) => ({
            name: p.name,
            price: p.price,
            detail: p.detail,
            image: p.image,
            stock: p.stock,
            categories: p.Categories?.map((c) => c.name),
        }));

        return results;

    } catch (error) {
        console.log('Problemas en la función allProducts()' + error);
    };
}

//PRODUCTS BY ID:
const productsId = async (idP) => {
  try {
    const totalProducts = await allProducts();
    const productId = totalProducts.find((r) => r.id.toString() === idP);
    return productId;
  } catch (err) {
    console.log("Problemas en /:id" + err);
  }
};
//--------------------------------------------------------------------------------------------------------------
const postProducts = async (req, res) => {
  try {
    const { name, price, detail, image, categories, stock } = req.body;

    const newProduct = await Product.create({
      name: name,
      price: price,
      detail: detail,
      stock: stock,
      image:
        image ||
        ["https://img.freepik.com/fotos-premium/deporte-mujer-sentada-descansando-despues-entrenamiento-o-ejercicio-gimnasio-proteina-shak_10307-27.jpg?w=740"],
    });

    newProduct.addCategory(categories);

    return res.send(newProduct);
  } catch (err) {
    console.log("problema para realizar el post: " + err);
  }
}; //EL formato del body debería ser {"results": [array de objetos products]}

const getProducts = async (req, res) => {
    const qname = req.query.name;
    const dbData = await Product.count();

  try {
    if (!dbData) {
      const results = jsonData.results.map(async (p) => {
        const newP = await Product.create({
          name: p.name,
          price: p.price,
          detail: p.detail,
          image: p.image,
          stock: p.stock
        });
        await newP.addCategories(p.categories);
      });
      res.status(200).send(results)
    } else if (dbData && qname) {
      const productsWithName = await Product.findAll({
        where: { name: { [Op.iLike]: `%${qname}%` } },
      });
      productsWithName?.length
        ? res.status(200).send(productsWithName)
        : res.status(404).send("Producto no encontrada");
    } else {
      Product.findAll({where: {stock: {[Op.gte]: 1}}, include: {model: Category}})
      .then(r => {res.status(200).send(r)})
    }
  } catch (err) {
    console.log(err);
  
    res.status(404).send("Problemas en el controlador de la ruta GET/products");
  }
};
const getProductsId = async (req, res) => {
  try {
    const id = req.params.id;
    const productId= await Product.findByPk(id, {include: Category})
   
    if (productId) {
      return res.status(200).send(productId);
    } else {

      res.status(404).send("Id no existente");
    }
  } catch (err) {
    res
      .status(404)
      .send("Problemas en el controlador de la ruta GET/products/:id");
  }
};
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).send("Producto eliminado");
  } catch (error) {
    res.status(400).send("error");
  }
};

const putProduct = async (req, res) => {

  const { id, name, price, detail, image, stock, categories } = req.body;

  try {
  
    await Product.update(
      {
        name,
        price,
        detail,
        image,
        stock,
      },
      {
        where: {
          id: id,
        },
      }
    );
 
    res.status(200).send("Producto actualizado con éxito");
  } catch (error) {
    res.status(400).send(console.log(error));

  
  }
};
module.exports = {
  getProducts,
  getProductsId,
  deleteProduct,
  putProduct,
  postProducts,
};