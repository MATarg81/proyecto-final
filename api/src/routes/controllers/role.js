const { Role } = require("../../db");
const jsonData = require("../../../roles.json");

async function getRoles(req, res) {
  const dbData = await Role.count();

  try {
    if (!dbData) {
      const rolesData = jsonData.results.map((r) => {
        return {
          name: r.name,
        };
      });
      await Role.bulkCreate(rolesData);
      return res.status(200).send(rolesData);
    } else {
      return Role.findAll().then((r) => res.status(200).send(r));
    }
  } catch (e) {
    return res.status(404).send(e);
  }
}

async function updateRoles(req, res) {
  const id = req.params.id;
  const body = req.body;
  console.log(id)

  try {
    await Role.update(
      {
        name: body.name,
      },
      {
        where: {
          id: Number(id),
        },
      }

    )

    res.status(200).send("Rol actualizado con éxito");
  } catch (error) {
    res.send(console.log(error));
  }
}

module.exports = {
  getRoles,
  updateRoles,
};
