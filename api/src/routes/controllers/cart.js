require("dotenv").config();
const { Cart, Product, User } = require("../../db");
const { putProduct } = require("./products");

const postCart = async (req, res) => {
    const { items, price } = req.body;
    try {

      const newCartList = await Cart.create({
        total: price,
        userId: 1,
        productQty: items.map(i => [i.id, i.qty])
      })

      await items.map(async i => {
        await newCartList.addProduct(i.id)
        const findProd = await Product.findByPk(i.id)
        await findProd.update({stock: findProd.stock - i.qty})
      });

      //await newCartList.setUser(1);

      return res.status(200).send(newCartList)
    //   const itemsMap = items.map(async (p) => {
    //    (JSON.stringify({
    //       id: p.id,

    //       name: p.name, //en MeLi Title
    //       detail: p.detail, // description
    //       image : p.image, // picture_url
    //       categories: p.categories, //category_id
    //       price: p.price, // unit_price
    //       qty: p.qty //quantity
    //   }))
      
    //   const findProd = await Product.findByPk(p.id)
    //   await findProd.update({stock: findProd.stock - p.qty})
    // }
    //   )
    //   console.log(itemsMap)
    //   const newCart = await Cart.create({
    //     products: itemsMap,
    //     total: parseInt(price),
    // });
  
    //   newCart.setUser(1);
  
      //return res.send(newCart);
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

  function getAllCart(req, res) {
    try{
      Cart.findAll({include: {model: Product}})
      .then(r => res.status(200).send(r))
      
    } catch(e) {
      return res.status(404).send(e)
    }
  }

module.exports= {postCart, getCart, getAllCart};