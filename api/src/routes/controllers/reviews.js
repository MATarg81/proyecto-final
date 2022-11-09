const { Review , User, Product, Activity } = require("../../db");
const jsonData = require("../../../reviewsActivities.json");
const jsonDataProducts = require("../../../reviewsProducts.json");


const allActivitiesReviews = async() => {
  const dbData = await Review.count();

    try {
        if (!dbData) {   
            // const results = await Review.bulkCreate(jsonData.results);
            // return results;
          const results = jsonData.results.map(async r => {
            const findAct = await Activity.findOne({where: {name: r.activity}});
            console.log(findAct)
            const newRev = await Review.create({
              score: r.score,
              content: r.content
            });
            await newRev.setActivity(findAct?.id);
          });
          return results;
        } else {
          
            const dbReviews = await Review.findAll({include:[{model: User, attributes: ['name']}, {model: Activity, attributes: ['name']}]})
            return dbReviews;
        }        
    } catch (error) {
        console.log('Problemas en la función dbReviews() ACA' + error);
    };
}

const reviewsActivitiesId = async(id) => {
  try {
      const totalReviews = await Review.findAll({include:[{model: User, attributes: ['name']}, {model: Activity, attributes: ['name']}]});
      const reviewsId = totalReviews.find((r) => r.activityId.toString() === id);
          
          return reviewsId;
  }
  catch(err) {
      console.log('Problemas en /:id' + err);
  }
};


async function getActivitiesReviews(req, res) {

try{                                       
    const totalReviews = await Review.findAll({include:[{model: User, attributes: ['name']}, {model: Activity, attributes: ['name']}]});
  
    if(totalReviews){
      return res.status(200).send(totalReviews);
    } else {
      res.status(404).send('Actividad no encontrada')
  }
  } catch (e) {
    return res.status(404).send('Problemas en el controlador de la ruta GET/reviews' + e);
  }
};


async function getActivitiesReviewsId (req, res) {
  try {
      const id = req.params.id;

      
      const result = await reviewsActivitiesId(id);
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

async function addActivitiesReviews(req, res) {
  const { 
    user,
    score, 
    content, 
    activity
  } = req.body;
  const findActivity = await Activity.findOne({ where: { name: activity}});

  try {
      const newReview = await Review.create({
        score: score,
        content: content,

      });
      
      await newReview.setActivity(findActivity.id);
      await newReview.setUser(user) //id

      return res
      .status(200)
      .json(newReview); 
  } catch (e) {
    return res
    .status(404)
    .send(console.log(e));
  }
}

//-------------------PRODUCTS-----------------------------------------------------------------------------------------------------------------------

const allProductsReviews = async() => {
  const dbData = await Review.count();

    try {
        if (!dbData) {   
            // const results = await Review.bulkCreate(jsonData.results);
            // return results;
          const results = jsonDataProducts.results.map(async r => {
            const findProduct = await Product.findOne({where: {name: r.product}})
            const findUser = await User.findOne({where: {id: r.user}})
            const newRev = await Review.create({
              score: r.score,
              content: r.content
            });
            await newRev.setProduct(findProduct?.id);
            await newRev.setUser(findUser?.id)
          });
          return results;
        } else {
          
            const dbReviews = await Review.findAll({include:[{model: Product, attributes: ['name']}, {model: User, attributes: ['name']}]})
            return dbReviews;
        }        
    } catch (error) {
        console.log("Problemas: " + error);
    };
}

const reviewsProductsId = async(id) => {
  try {
      const totalReviews = await Review.findAll({include:[{model: Product, attributes: ['name']}, {model: User, attributes: ['name']}]});
      const reviewsId = totalReviews.filter((r) => r.productId?.toString() === id);
          
          return reviewsId;
  }
  catch(err) {
      console.log('Problemas en /:id' + err);
  }
};


async function getProductsReviews(req, res) {

try{
    const totalReviews = await Review.findAll({include:[{model: Product, attributes: ['name']}, {model: User, attributes: ['name']}]});
  
    if(totalReviews){
      return res.status(200).send(totalReviews);
    } else {
      res.status(404).send('Producto no encontrada')
  }
  } catch (e) {
    return res.status(404).send(console.log(e));
  }
};


async function getProductsReviewsId (req, res) {
  try {
      const id = req.params.id;

      
      const result = await reviewsProductsId(id);
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

async function addProductsReviews(req, res) {
  const { 
    score, 
    content, 
    product, 
    user
  } = req.body;
  console.log(req.body)

  const findProduct = await Product.findOne({ where: { id: product}});
  const findUser = await User.findOne({where: { name: user }})
 

  try {
      const newReview = await Review.create({
        score,
        content,
      });
      
      newReview.setProduct(product); //id
      newReview.setUser(user); //id

      return res
      .status(200)
      .json(newReview); 
  } catch (e) {
    return res
    .status(404)
    .send(console.log("problemas: ", e));
  }
}

async function updateProductsReviews(req, res) {
  const { 
    score, 
    content, 
    product, 
    user
  } = req.body;
  console.log(req.body)

  const findProduct = await Product.findOne({ where: { id: product}});
  const findUser = await User.findOne({where: { name: user }})
 
  try {
      const newReview = await Review.update({
        score,
        content,
      });
      
      newReview.setProduct(findProduct.id);
      newReview.setUser(findUser.id);

      return res
      .status(200)
      .json(newReview); 
  } catch (e) {
    return res
    .status(404)
    .send(console.log("problemas: ", e));
  }
}

module.exports = {
  getActivitiesReviews,
  addActivitiesReviews,
  getActivitiesReviewsId,
  getProductsReviews,
  addProductsReviews,
  getProductsReviewsId,
  updateProductsReviews
};
