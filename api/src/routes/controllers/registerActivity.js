const { Activity, User } = require('../../db');


const addUserActivity = async(req, res) => {

  const  idU  = req.query.idU;
  const  idA  = req.query.id;

try {
  const findUser = await User.findByPk(idU)
  const findActivity = await Activity.findByPk(idA)

  if (findUser && findActivity) {
    await findUser.addActivity(findActivity)

    res.status(200).json(findActivity);
  } else {
    res.status(404).send("Problemas en agregar la actividad al usuario");
  }
} catch (error) {
  res.status(404).send( error)
}
}


module.exports = {
  addUserActivity
};