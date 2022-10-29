require("dotenv").config();
const { Cart, Product } = require("../../db");
const { putProduct } = require("./products");

const postCart = async (req, res) => {
    console.log("entré a postCart")
    try {
      const { items, price } = req.body;

      const itemsMap = items.map(async (p) => {
       (JSON.stringify({
          id: p.id,
          name: p.name, //en MeLi Title
          detail: p.detail, // description
          image : p.image, // picture_url
          categories: p.categories, //category_id
          price: p.price, // unit_price
          qty: p.qty //quantity
      }))
      
      const findProd = await Product.findByPk(p.id)
      await findProd.update({stock: findProd.stock - p.qty})
    }
      )
      console.log(itemsMap)
      const newCart = await Cart.create({

        products: itemsMap,
        total: parseInt(price),
    });
  
      newCart.setUser(1); //FALTA VER Cómo asignarle a un usuario el carrito cuando esté logueado
  
      return res.send(newCart);
    } catch (err) {
      console.log("problema para realizar el post: " + err);
    }
  }; 

module.exports= {postCart};