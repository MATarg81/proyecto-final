const { Router } = require("express");
const {
  getUsers,
  getUsersById,
  deleteUser,
  addUser,
  updateUser
} = require("./controllers/users");
//const { verifyAdmin, verifyInstructor } = require('./controllers/middlewaresRoles')

//Trae todos los users desde la DB
//Trae los users por nombre, apellido, email,
//Debe poder actualizar los datos
//Debe poder eliminar users

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUsersById);
router.post("/", addUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser)

module.exports = router;
