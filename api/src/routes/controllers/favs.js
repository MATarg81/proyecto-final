const { User, Favorite, Product } = require("../../db");
//const { getUsers, getUsersById } = require("./users");

async function getFavs(req, res) {
  const idU = req.query.idU;

  try {
    const findAll = await Favorite.findAll({
      where: {
        userId: idU,
      },
      include: {
        model: Product,
      },
    });
    res.status(200).send(findAll);
  } catch (error) {
    res.status(404).send(error);
  }
}

async function setFav(req, res) {
  const idU = req.query.idU;
  const idP = req.query.idP;

  try {
    const findFav = await Favorite.findAll({ where: { userId: idU } });

    const find = await findFav.find(async (f) => {
      (await f.productId) === idP;
    });

    if (!find) {
      const newFav = await Favorite.create();

      await newFav.setUser(idU);
      await newFav.setProduct(idP);
      return res.status(200).json(findFav);
    } else {
      res.status(404).send("Fallo en agregar favs");
    }
  } catch (error) {
    res.status(404).send(console.log(error));
  }
}

async function removeFav(req, res) {
  const idU = req.query.idU;
  const idP = req.query.id;

  try {
    const findUser = await User.findByPk(idU);
    const findProduct = await Product.findByPk(idP);

    if (findUser && findProduct) {
      const find = await Favorite.findOne({
        where: {
          userId: idU,
          productId: idP,
        },
      });

      await find.destroy();

      res.status(200).send("Producto eliminado de favoritos");
    } else {
      res.status(404).send("Fallo al eliminar");
    }
  } catch (error) {
    res.status(404).send(error);
  }
}

module.exports = {
  setFav,
  removeFav,
  getFavs,
};
