const { Activity, User, Role } = require("../../db");
const jsonData = require("../../../activities.json");

const activitiesId = async (id) => {
  try {
    const totalActivities = await Activity.findAll({
      include: [
        { model: User, attributes: ["email"], include: [{ model: Role }] },
      ],
    });
    const activityId = totalActivities.find((r) => r.id.toString() === id);

    return activityId;
  } catch (err) {
    console.log("Problemas en /:id" + err);
  }
};

const getActivities = async (req, res) => {
  try {
    const { name } = req.query;
    const totalActivities = await Activity.findAll({
      include: [
        { model: User, attributes: ["email"], include: [{ model: Role }] },
      ],
    });
    if (name) {
      const activitiesName = totalActivities.filter((r) =>
        r.name.toLowerCase().includes(name.toString().toLowerCase())
      );
      activitiesName.length
        ? res.status(200).send(activitiesName)
        : res.status(404).send("Actividad no encontrada");
    } else {
      res.send(totalActivities);
    }
  } catch (err) {
    console.log(err);
    res
      .status(404)
      .send("Problemas en el controlador de la ruta GET/activities");
  }
};

const getActivitiesId = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await activitiesId(id);
    if (result) {
      return res.status(200).send(result);
    } else {
      res.status(404).send("Id no existente");
    }
  } catch (err) {
    res
      .status(404)
      .send("Problemas en el controlador de la ruta GET/activities/:id");
  }
};

const deleteActivity = async (req, res) => {
  const { id } = req.params;
  try {
    await Activity.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).send("Actividad eliminada");
  } catch (error) {
    res.status(400).send("error");
  }
};

const addActivity = async (req, res) => {
  const { name, detail, days, times, img, email, price } = req.body;

  const dbActivity = await Activity.findOne({ where: { name: name } });

  try {
    if (!dbActivity) {
      const newActivity = await Activity.create({
        name: name,
        detail: detail,
        days: days,
        times: times,
        img: img || "https://eltarget.com/wp-content/uploads/2018/03/%C2%A1Los-10-deportes-mas-practicados-en-todo-el-mundo-696x339.jpg",
        price,
      });

      newActivity.addUser(email);

      return res.status(200).json(newActivity);
    } else {
      res.status(404).send(`Actividad "${name + " "}" already exists`);
    }
  } catch(e) {
    res.status(404).send((e));
  }
};

const patchActivity = async (req, res) => {
  const body = req.body;

  try {
    await Activity.update(
      {
        name: body.name,
        detail: body.detail,
        days: body.days,
        times: body.times,
        price: body.price,
        img: body.img,
      },
      {
        where: {
          id: Number(body.id),
        },
      }
    );

    res.status(200).send("Usuario actualizado con éxito");
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  getActivities,
  getActivitiesId,
  deleteActivity,
  addActivity,
  patchActivity,
};
