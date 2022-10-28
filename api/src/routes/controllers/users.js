const { User, Role } = require("../../db");
const { Op } = require("sequelize");
const jsonData = require("../../../users.json");

async function getUsers(req, res) {
  const { name, lastname, email } = req.query;
  const dbData = await User.count();

  try {
    if (!dbData) {
      jsonData.results.map(async u => {
        const newUser = await User.create({
          name: u.name,
          lastname: u.lastname,
          email: u.email,
          dateOfBirth: u.dateOfBirth.toString(),
          phoneNumber: u.phoneNumber,
          address: u.address,
          postalCode: u.postalCode.toString(),
          password: u.password
        });

        await newUser.setRole(5);
      });
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
      User.findAll({ include: Role }).then((r) => res.status(200).send(r));
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
  const { name, lastname, email, dateOfBirth, address, phoneNumber, postalCode, password } = req.body;
  const dbUser = await User.findOne({ where: { email: email }, include: Role });

  try {
    if (!dbUser) {
      const newUser = await User.create({
        name: name,
        lastname: lastname,
        email: email,
        dateOfBirth: dateOfBirth.toString(),
        phoneNumber: phoneNumber,
        address: address,
        postalCode: postalCode.toString(),
        password: password
      });

      const addRole = await newUser.setRole(5);
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

async function updateUser(req, res) {
  const id = req.params.id;
  const body = req.body;
  console.log(id)

  try {
    await User.update(
      {
        name: body.name,
        lastname: body.lastname,
        dateOfBirth: body.dateOfBirth,
        phoneNumber: body.phoneNumber,
        email: body.email,
        address: body.address,
        postalCode: body.postalCode,
        password: body.password

      },
      {
        where: {
          id: Number(id),
        },
      }
    ).setRole(body.roleId)
    res.status(200).send("Usuario actualizado con éxito");
  } catch (error) {
    res.status(400).send(error.JSON);
  }
}

module.exports = {
  getUsers,
  getUsersById,
  deleteUser,
  addUser,
  updateUser,
};

