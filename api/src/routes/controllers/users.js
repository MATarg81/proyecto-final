const { User, Role } = require('../../db');
const axios = require('axios');
const { Op } = require("sequelize");
const dbData = require('') //completar!!!


async function getUsers(req, res) {

    const { name, lastname, email } = req.query;
  
    try {
      const usersData = dbData.map(u => {
          return {
            email: u.email,
            name: u.name,
            lastname: u.lastname,
            dateOfBirth: u.dateOfBirth,
            phoneNumber: u.phoneNumber,
            direction: u.direction.toString(),
          }
      });
      await User.bulkCreate(usersData);
      if(name || lastname || email) {
            const userName = await User.findOne({ where: { name: {[Op.iLike]: `%${name}%` }}});
            const userLastname = await User.findOne({ where: { lastname: {[Op.iLike]: `%${lastname}%` }}});
            const userEmail = await User.findOne({ where: { email: {[Op.iLike]: `%${email}%` }}});
            userName ? res.status(200).send(userName) : res.status(404).send("User can't be found");
            userLastname ? res.status(200).send(userLastname) : res.status(404).send("User can't be found");
            userEmail ? res.status(200).send(userEmail) : res.status(404).send("Email can't be found");
          } else {
            User.findAll()
              .then((r) => res.status(200).send(r))
      } 
    } catch (error) {
      return res.status(404).send(error)
    }
  }
  
  // La id tal vez deba ser username... sino por params buscariamos '/user/juanitosanchez@gmail.com' ?
  async function getUsersById(req, res) {
    const { email } = req.params
    const findUser = await User.findOne({where: {email: email}, include: Role })
    findUser ? res.status(200).send(findUser) : res.status(404).send("User can't be found");
  }

  function addUser() {

  }

  function updateUser(mail) {

    const {email, name, lastname, dateOfBirth, phoneNumber, direction, rol} = req.body

    const findUser = User.findOne({where: {email: mail}, include: Role })
    if(findUser) {
      findUser.set({
        email: email,
        name: name,
        lastname: lastname,
        dateOfBirth: dateOfBirth,
        phoneNumber: phoneNumber,
        direction: direction,
        rol: rol
      })
      return res.status(200).send(`User ${name + lastname} updated correctly`)
    } else {
      res.status(404).send(`User mail ${mail} can't be found`)
    }
  }

  function deleteUser(email) {
    const findUser = User.findOne({where: {email: email}})
    if(findUser) {
      User.destroy({where: {email: email}})
      return res.status(200).send(`User ${findUser.name} was deleted`)
    } else {
      return res.status(404).send(`Cannot find the user email ${email}`)
    }

  }
  
  module.exports = {
    getUsers,
    getUsersById,
    updateUser,
    deleteUser,
    addUser
  }