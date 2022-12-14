const { User, Favorite, Product } = require("../../db");
//const { getUsers, getUsersById } = require("./users");


async function getFavs(req, res) {
  const  idU  = req.query.idU;
  
  try {
    const findAll = await Favorite.findAll({
      where:{
        userId: idU
      }, include:{
        model: Product
      }
    
    })
  res.status(200).send(findAll)

  } catch (error) {
    res.status(404).send(error)
  }
}

async function setFav(req, res) {
    const  idU  = req.query.idU;
    const  idP  = req.query.id;
  console.log(idP, idU, 'ididididissss')
try {
    const findUser = await User.findByPk(idU)
    const findProduct = await Product.findByPk(idP)

    if (findUser && findProduct) {
        const newFav = await Favorite.create()
    
      await newFav.setUser(findUser)
      await newFav.setProduct(findProduct)

      res.status(200).json(findProduct);
    } else {
      res.status(404).send("fail en agreagar favs");
    }
} catch (error) {
    res.status(404).send( error)
}
  }


  async function removeFav(req, res) {
    const  idU  = req.query.idU;
    const  idP  = req.query.id;

try {
    const findUser = await User.findByPk(idU)
    const findProduct = await Product.findByPk(idP)

    if (findUser && findProduct) {
      const find = await Favorite.findOne({where:{
        userId : idU,
        productId : idP
      }})
      
      await find.destroy()

      res.status(200).send('producto eliminado de favoritos');
    } else {
      res.status(404).send("fail en elimar fav");
    }
} catch (error) {
    res.status(404).send( error)
}
  }
  
  module.exports = {
    setFav,
    removeFav,
    getFavs
  };