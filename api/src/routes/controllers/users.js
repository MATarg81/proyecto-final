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
          adress: u.adress,
        };
      });
      await User.bulkCreate(usersData);
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
      User.findAll().then((r) => res.status(200).send(r));
    }
  } catch (error) {
    return res.status(404).send(error);
  }
}

async function getUsersById(req, res) {
  const { email } = req.params;
  const findUser = await User.findOne({
    where: { email: email },
    include: Role,
  });
  findUser
    ? res.status(200).send(findUser)
    : res.status(404).send("User can't be found");
}

async function addUser(req, res) {
  const { name, lastname, email, dateOfBirth, role, adress, phoneNumber } = req.body;
  const dbUser = await User.findOne({ where: { email: email }, include: Role });

  try {
    if (!dbUser) {
      const newUser = await User.create({
        name: name,
        lastname: lastname,
        email: email,
        dateOfBirth: dateOfBirth,
        phoneNumber: phoneNumber,
        adress: adress,
        role: role,
      });
      await newUser.addRole(role); //Queda pendiente añadir un rol. Error: newUser.addRole is not a function
      return res
        .status(200)
        .send(`User "${name + ' ' + lastname}" added`);
    } else {
      res
        .status(404)
        .send(`User "${name + ' ' + lastname}" already exists`);
    }
  } catch (e) {
    return res.status(404).send(console.log(e));
  }
}

function updateUser(req, res) {
  const { email, name, lastname, dateOfBirth, phoneNumber, adress, role } =
    req.body;

  const findUser = User.findOne({ where: { email: email }, include: Role });
  if (findUser) {
    findUser.set({
      email: email,
      name: name,
      lastname: lastname,
      dateOfBirth: dateOfBirth,
      phoneNumber: phoneNumber,
      adress: adress,
      role: role,
    });
    return res.status(200).send(`User ${name + lastname} updated correctly`);
  } else {
    res.status(404).send(`User mail ${email} can't be found`);
  }
}

function deleteUser(req, res) {
  const { email } = req.query;
  const findUser = User.findOne({ where: { email: email } });
  if (findUser) {
    User.destroy({ where: { email: email } });
    return res.status(200).send(`User ${findUser.name} was deleted`);
  } else {
    return res.status(404).send(`Cannot find the user email ${email}`);
  }
}

module.exports = {
  getUsers,
  getUsersById,
  updateUser,
  deleteUser,
  addUser,
};
