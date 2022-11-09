const { Category} = require("../../db");
const jsonData = require("../../../category.json");
const { Op } = require("sequelize");

async function getCategory(req, res) {

  try {
    const allCategories = await Category.findAll();
    res.status(200).send(allCategories);
  } catch (e) {
    res.status(404).send(e);
  }
}

async function addCategory(req, res) {
  const {name} = req.body
  const findCategory = await Category.findOne({where: {name: { [Op.iLike]: `%${name}%` }}})
  try{
    if(!findCategory) {
      const newcategory = await Category.create({
        name: name
      })
      return res.status(200).send(newcategory);
    } else {
      return res.status(404).send(`Category "${name}" already exists`);
    }
  } catch(e) {
    res.status(404).send(e);
  }
}

module.exports = {getCategory, addCategory};