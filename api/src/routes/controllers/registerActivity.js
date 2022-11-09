const { Activity, User } = require('../../db');


const addUserActivity = async(req, res) => {

  const  idU  = req.query.idU;
  const  idA  = req.query.id;

try {
  const findUser = await User.findByPk(idU)
  const findActivity = await Activity.findByPk(idA)

  await findUser.addActivity(idA)

  res.status(200).json(idA);
} catch (error) {
  res.status(404).send("Problemas en agregar la actividad al usuario");
}
}


module.exports = {
  addUserActivity
};