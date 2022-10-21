const { Category} = require("../../db");
const jsonData = require("../../../category.json");

async function getCategory(req, res) {
  const dbData = await Category.count();

  try {
    if (!dbData) {
      // const categoryData = jsonData.results.map((r) => {
      //   return {
      //     name: r.name,
      //   };
      // });
      const charged = await Category.bulkCreate(jsonData.results);
      res.status(200).json(charged);
    } else {
      const allCategories = await Category.findAll();
      res.status(200).send(allCategories);
    }
  } catch (e) {
    res.status(404).send(e);
  }
}

async function getAllCategories(req, res){
  const dbfilled = await Category.findAll()
  try {
    if(dbfilled.length === 0){
       await getCategory()
       let lleno = Category.findAll()
      
      if(dbfilled.length > 0) return res.status(200).json(lleno)
    }else{
      console.log(dbfilled, " filled")
      return res.status(200).json(dbfilled)
    
    }
    
  } catch (error) {
    console.log(error, "soy error")
    return res.status(400).send('get All Categories db error').json(error)
  }

}
module.exports = {getCategory, getAllCategories};