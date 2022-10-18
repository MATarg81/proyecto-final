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

      return Category.findAll().then((r) => res.status(200).send(r));
    }
  } catch (e) {
    return res.status(404).send(e);
  }
}

module.exports = getCategory;