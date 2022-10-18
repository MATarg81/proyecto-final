const { Category} = require("../../db");
const jsonData = require("../../../category.json");

async function getCategory(req, res) {
  const dbData = await Category.count();

  try {
    if (!dbData) {
      const categoryData = jsonData.results.map((r) => {
        return {
          name: r.name,
        };
      });
      await Category.bulkCreate(categoryData);
      return res.status(200).send("Category succesfully charged");
    } else {
      return res.status(404).send("Categories already charged")
    }
  } catch (e) {
    return res.status(404).send(e);
  }
}

async function getAllCategories(req, res){
  const dbfilled = Category.findAll()
  try {
    if(dbfilled.length === 0){
      const dbfilling = await getCategory()
      if(dbfilling.length > 0) return res.status(200).json(dbfilling)
    }else{
      return res.status(200).json(dbfilled)
    }
    
  } catch (error) {
    return res.status(400).send('get All Categories db error').json(error)
  }

}
module.exports = {getCategory, getAllCategories};