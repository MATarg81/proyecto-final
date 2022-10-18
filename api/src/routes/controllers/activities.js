const { Activities, User} = require('../../db');
const jsonData = require("../../../activities.json");
 

const allActivities = async() => {

  const dataActivity = [];
        const results = jsonData.results.map(db => {
          dataActivity.push({
              name: db.name,
              detail: db.detail,
              days: db.days,
              times: db.times,
              img: db.img,
          })
        });
        return dataActivity;
}

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


const deleteActivity = async (req, res)=>{
  const { name } = req.query;
  const findActivity = Activities.findOne({ where: { name:name } });
  try {
    if (findActivity) {
      Activities.destroy({ where: { name:name } });
      res.status(200).send('Actividad eliminada')
    }
  } catch (error) {
      res.status(400).send(error)
  }
};

const addActivity = async(req, res) => {
  const { 
    name,
    detail,
    days,
    times,
    user
  } = req.body;
 
  const dbActivity = await Activities.count();

  try {
    if(!dbActivity){
      const newActivity = await Activities.create({
        name: name,
        detail: detail,
        days: days,
        times: times
      });
      
      return res
        .status(200)
        .send(`Actividad "${name + ' ' }" added`).json(newActivity);
      } else {
      res
        .status(404)
        .send(`Actividad "${name + ' ' }" already exists`);
    }
  } catch (e) {
    return res.status(404).send(console.log(e));
  }
} 

module.exports = {
  getActivities, 
  deleteActivity,
  addActivity
};