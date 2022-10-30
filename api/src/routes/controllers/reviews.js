const { Review , User, Activity } = require("../../db");
const jsonData = require("../../../reviews.json");


const allReviews = async() => {
  const dbData = await Review.count();

    try {
        if (!dbData) {   
            // const results = await Review.bulkCreate(jsonData.results);
            // return results;
          const results = jsonData.results.map(async r => {
            const findAct = await Activity.findOne({where: {name: r.activity}})
            const newRev = await Review.create({
              score: r.score,
              content: r.content
            });
            await newRev.setActivity(findAct?.id);
          });
          return results;
        } else {
          
            const dbReviews = await Review.findAll({include:[{model: Activity, attributes: ['name'], include:[{model: User, attributes: ['name']}]}]})
            return dbReviews;
        }        
    } catch (error) {
        console.log('Problemas en la función dbReviews()' + error);
    };
}

const reviewsId = async(id) => {
  try {
      const totalReviews = await allReviews();
      const reviewsId = totalReviews.find((r) => r.activityId.toString() === id);
          
          return reviewsId;
  }
  catch(err) {
      console.log('Problemas en /:id' + err);
  }
};


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


async function getReviewsId (req, res) {
  try {
      const id = req.params.id;

      
      const result = await reviewsId(id);
      if (result) {
          return res.status(200).send(result);
      } else {
          res.status(404).send('Id no existente')
      };
  }
  catch(err) {
      res.status(404).send('Problemas en el controlador de la ruta GET/reviews/:id');
  }
};

async function addReviews(req, res) {
  const { 
    score, 
    content, 
    activity
  } = req.body;
  const findActivity = Activity.findOne({ where: { name: activity}});

  try {
      const newReview = await Review.create({
        score: score,
        content: content,

      });
      
      newReview.setActivity(findActivity.id);

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
  addReviews,
  getReviewsId
};
