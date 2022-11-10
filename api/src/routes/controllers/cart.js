require("dotenv").config();
const { Cart, Product, User } = require("../../db");
const { putProduct } = require("./products");

const postCart = async (req, res) => {
  const { items } = req.body;
  const {id} = req.params
  // console.log(items)
  let finalPrice = 0;
  items?.forEach((i) => {
    finalPrice = finalPrice + Number(i.price) * Number(i.qty);
  });

  try {
    if(items?.length > 0) {
      const newCartList = await Cart.create({
        total: finalPrice,
        userId: id,
        productQty: items?.map((i) => [i.id, i.qty]),
      });
  
      await items.map(async (i) => {
        await newCartList.addProduct(i.id);
        const findProd = await Product.findByPk(i.id);
        await findProd.update({ stock: findProd.stock - i.qty });
      });
  
      return res.status(200).send(newCartList);

    } else {
      return res.status(404).send('No se pudo realizar el post')
    }
  } catch (err) {
    console.log("problema para realizar el post: " + err);
  }
};
const cartDetail = async (req, res) => {
  try {
    const id = req.params.id;
    const purchesesMaded = await Cart.findOne({
      where: { id: id },
      include: [{ model: Product }],
    });
    purchesesMaded && res.status(200).json(purchesesMaded);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const getCart = async (req, res) => {
  try {
    const { id } = req.params;
    const purhcesesMaded = await Cart.findAll({
      where: {
        userId: id,
      },
      include: {
        model: Product,
      },
    });
    return res.status(200).json(purhcesesMaded);
  } catch (error) {
    return res.status(400).send(console.log(error));
  }
};

function getAllCart(req, res) {
  try {
    Cart.findAll({ include: { model: Product } }).then((r) =>
      res.status(200).send(r)
    );
  } catch (e) {
    return res.status(404).send(e);
  }
}

module.exports = { postCart, getCart, getAllCart, cartDetail };

