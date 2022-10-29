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
//<<<<<<< comprasRealizadasRedux
          //name: p.name,
         // price: p.price,
         // qty: p.qty
=======
          name: p.name, //en MeLi Title
          detail: p.detail, // description
          image : p.image, // picture_url
          categories: p.categories, //category_id
          price: p.price, // unit_price
          qty: p.qty //quantity
//>>>>>>> develop
      }))
      
      const findProd = await Product.findByPk(p.id)
      await findProd.update({stock: findProd.stock - p.qty})
    }
      )
      console.log(itemsMap)
      const newCart = await Cart.create({
//<<<<<<< comprasRealizadasRedux
=======
    const itemsMap = items.map(async (p) => {
      JSON.stringify({
        id: p.id,
        name: p.name,
        price: p.price,
        qty: p.qty,
      });
//>>>>>>> develop

        products: itemsMap,
        total: parseInt(price),
    });
  
      newCart.setUser(1);
  
      return res.send(newCart);
    } catch (err) {
      console.log("problema para realizar el post: " + err);
    }
  }; 

  const getCart = async (req, res) =>{
    try {
      const {id} = req.params
      const purhcesesMaded = await Cart.findAll({
        where:{
          userId:id
        }
  
      })
      return res.status(200).json(purhcesesMaded)
    } catch (error) {
      return res.status(400).json(error)
    }

  }

module.exports= {postCart, getCart};