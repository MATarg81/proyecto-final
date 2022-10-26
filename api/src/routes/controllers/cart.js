require("dotenv").config();
const { Cart, User } = require("../../db");

const postCart = async (req, res) => {
    console.log("entré a postCart")
    try {
        console.log(req.body)
      const { items, price } = req.body;
      console.log(items, price)
      const itemsMap = items.map((p) => (JSON.stringify({
        id: p.id,
        name: p.name,
        price: p.price,
        qty: p.qty
      })))
  
      //const categoriesLowerCase = categories?.map((c) => c.toLowerCase());
  
      const newCart = await Cart.create({

        products: itemsMap,
        total: parseInt(price),
    });
  
      newCart.addUser(1);
  
      return res.send(newCart);
    } catch (err) {
      console.log("problema para realizar el post: " + err);
    }
  }; 

module.exports= {postCart};