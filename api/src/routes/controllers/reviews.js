const { Review , User, Activities } = require("../../db");
const jsonData = require("../../../reviews.json");


const allReviews = async() => {
  const dbData = await Review.count();

    try {
        if (!dbData) {   
            const results = await Review.bulkCreate(jsonData.results);
            return results;
       
        } else {
          
            const dbReviews = await Review.findAll({include: User})
            return dbReviews;
        }        
    } catch (error) {
        console.log('Problemas en la función dbReviews()' + error);
    };
}

async function getReviews(req, res) {

try{
    const totalReviews = await allReviews();
  
    if(totalReviews){
      return res.status(200).send(totalReviews);
    } else {
      res.status(404).send('Actividad no encontrada')
  }
  } catch (e) {
    return res.status(404).send('Problemas en el controlador de la ruta GET/reviews' + e);
  }
};

async function addReviews(req, res) {
  const { 
    score, 
    content, 
    activity,
    name,
  } = req.body;
  const findActivity = Activities.findOne({ where: { name: activity}});

  try {
      const newReview = await Review.create({
        score: score,
        content: content,

      });
      let reviewsSave = [];
      newReview.setUser(name);
      newReview.setActivities(findActivity.id);

      reviewsSave.push(newReview);
      await newReview.save();

      console.log(newReview)

      return res
      .status(200)
      .json(newReview); 
  } catch (e) {
    return res
    .status(404)
    .send(console.log(e));
  }
}


module.exports = {
  getReviews,
  addReviews
};
