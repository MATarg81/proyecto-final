const { User, Role } = require("../../db");
const { Op } = require("sequelize");
const jsonData = require("../../../users.json");

async function getUsers(req, res) {
  const { name, lastname, email } = req.query;
  const dbData = await User.count();

  try {
    if (!dbData) {
      const usersData = jsonData.results.map((u) => {
        return {
          email: u.email,
          name: u.name,
          lastname: u.lastname,
          dateOfBirth: u.dateOfBirth,
          phoneNumber: u.phoneNumber,
          address: u.address,
        };
      });
      await User.bulkCreate(usersData);
      return res.status(200).send("Users succefully charged")
    } else if (name || lastname || email) {
      const userName = await User.findOne({
        where: { name: { [Op.iLike]: `%${name}%` } },
      });
      const userLastname = await User.findOne({
        where: { lastname: { [Op.iLike]: `%${lastname}%` } },
      });
      const userEmail = await User.findOne({
        where: { email: { [Op.iLike]: `%${email}%` } },
      });
      if (userName) {
        return res.status(200).send(userName);
      }
      if (userLastname) {
        return res.status(200).send(userLastname);
      }
      if (userEmail) {
        return res.status(200).send(userEmail);
      } else {
        return res.status(404).send("User can't be found");
      }
    } else {
      User.findAll({include: Role}).then((r) => res.status(200).send(r));
    }
  } catch (error) {
    return res.status(404).send(error);
  }
}

//Debería poder guardar los datos si se editan en el front. 
// Por ejemplo: {name: Laura} --> front: usuario.name = Sofía --> Tabla: {name: Sofía}
async function getUsersById(req, res) {
  const { id } = req.params;

  const findUser = await User.findOne({
    where: { id: id }
  });
  if (findUser) {
    await findUser.save()
    res.status(200).send(findUser);
  } else {
    res.status(404).send("User can't be found");
  }
}

async function addUser(req, res) {
  const { name, lastname, email, dateOfBirth, role, address, phoneNumber } = req.body;
  const dbUser = await User.findOne({ where: { email: email }, include: Role });
  const findRole = await Role.findOne({where: {name: role}})

  try {
    if (!dbUser) {
      const newUser = await User.create({
        name: name,
        lastname: lastname,
        email: email,
        dateOfBirth: dateOfBirth,
        phoneNumber: phoneNumber,
        address: address
      });
      
      const addRole = await newUser.setRole(findRole.id); //Queda pendiente añadir un rol. Error: newUser.addRole is not a function
      console.log(addRole)
      return res.status(200).send(newUser);
    } else {
      res.status(404).send(`User "${name + " " + lastname}" already exists`);
    }
  } catch (e) {
    return res.status(404).send(console.log(e));
  }
}

async function deleteUser(req, res) {
  const { id } = req.params;
  const findUser = await User.findOne({ where: { email: id } });
  if (findUser) {
    await findUser.destroy();
    return res.status(200).send(`User was deleted`);
  } else {
    return res.status(404).send(`Cannot find the user email ${id}`);
  }
}

module.exports = {
  getUsers,
  getUsersById,
  deleteUser,
  addUser,
};
