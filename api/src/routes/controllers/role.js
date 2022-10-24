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
      return res.status(200).send("Roles succesfully charged");
    } else {
      return Role.findAll().then((r) => res.status(200).send(r));
    }
  } catch (e) {
    return res.status(404).send(e);
  }
}

module.exports = getRoles;
