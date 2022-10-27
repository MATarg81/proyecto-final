require("dotenv").config();
const { Cart } = require("../../db");

const postCart = async (req, res) => {
    console.log("entré a postCart")
    try {
      const { items, price } = req.body;

      const itemsMap = items.map((p) => ({
        id: p.id,
        name: p.name,
        price: p.price,
        qty: p.qty
      }))

      const newCart = await Cart.create({

        products: itemsMap,
        total: parseInt(price),
    });
  
      newCart.setUser(1);
  
      return res.send(newCart);
    } catch (err) {
      console.log("problema para realizar el post: " + err);
    }
  }; 

module.exports= {postCart};