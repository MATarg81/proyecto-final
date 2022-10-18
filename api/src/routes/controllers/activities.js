const { Activities, User} = require('../../db');
const jsonData = require("../../../activities.json");
 

const allActivities = async() => {

  // const dataActivity = [];
  //       const results = jsonData.results.map(db => {
  //         dataActivity.push({
  //             name: db.name,
  //             detail: db.detail,
  //             days: db.days,
  //             times: db.times,
  //             img: db.img,
  //       })
  //     });
  //       return dataActivity;

  const dbData = await Activities.count();

    try {
        if (!dbData) {   
            const results = await Activities.bulkCreate(jsonData.results);
            return results;
       
        } else {
            const dbActivity = await Activities.findAll({
                include: {
                  model: User,
                  attributes: ["email"],
                  through: {
                      attributes: []
                  }
            }}); 
            return dbActivity;

        }        
    } catch (error) {
        console.log('Problemas en la función dbActivity()' + error);
    };
}

const activitiesId = async(id) => {
  try {

      const totalActivities = await allActivities();
      const activityId = totalActivities.find((r) => r.id.toString() === id);
          
          return activityId;
  }
  catch(err) {
      console.log('Problemas en /:id' + err);
  }
};

const getActivities = async(req, res) => {
    try {
        const {name} = req.query;
        const totalActivities = await allActivities();
        ;
        if(name) {
            const activitiesName = totalActivities.filter((r) => r.name.toLowerCase().includes(name.toString().toLowerCase()));
            (activitiesName.length) ?
            res.status(200).send(activitiesName)
            : res.status(404).send('Actividad no encontrada');            
        } else {
            res.send(totalActivities);
        }
    } catch (err) {
        console.log(err);
        res.status(404).send('Problemas en el controlador de la ruta GET/activities');
    }; 
};

const getActivitiesId = async(req, res) => {
  try {
      const id = req.params.id;

      
      const result = await activitiesId(id);
      if (result) {
          return res.status(200).send(result);
      } else {
          res.status(404).send('Id no existente')
      };
  }
  catch(err) {
      res.status(404).send('Problemas en el controlador de la ruta GET/activities/:id');
  }
 
};

const deleteActivity = async (req, res)=>{
  const { id } = req.params;
  try {
    await  Activities.destroy({
      where:{
          id:id,
      }
    })
    res.status(200).send('Actividad eliminada')
  } catch (error) {
      res.status(400).send('error')
  }
}

const addActivity = async(req, res) => {
  const { 
    name,
    detail,
    days,
    times,
    img,
    email
  } = req.body;
 
  const dbActivity = await Activities.count();

  try {

      const newActivity = await Activities.create({
        name: name,
        detail: detail,
        days: days,
        times: times,
        img: img
      });
      
      newActivity.addUser(email);

      return res
        .status(200)
        .json(newActivity);
      } catch {
      res
        .status(404)
        .send(`Actividad "${name + ' ' }" already exists`);
      }
};
//comentario
module.exports = {
  getActivities, 
  getActivitiesId,
  deleteActivity,
  addActivity
};