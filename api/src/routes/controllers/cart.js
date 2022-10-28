require("dotenv").config();
const { Cart, Product } = require("../../db");

const postCart = async (req, res) => {
  console.log("entré a postCart");
  try {
    const { items, price } = req.body;

    const itemsMap = items.map(async (p) => {
      JSON.stringify({
        id: p.id,
        name: p.name,
        price: p.price,
        qty: p.qty,
      });

      const findProd = await Product.findByPk(p.id);
      await findProd.update({ stock: findProd.stock - p.qty });
    });
    console.log(itemsMap);
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

const getCart = async (req, res) => {
  const { id } = req.params;
  try {
    const purhcesesMaded = await Cart.findAll({
      where: {
        userId: id,
      },
    });
    return res.status(200).json(purhcesesMaded);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = { postCart, getCart };
