const { Router } = require("express");
const {
  getUsers,
  getUsersById,
  updateUser,
  deleteUser,
  addUser,
} = require("./controllers/users");

//Trae todos los users desde la DB
//Trae los users por nombre, apellido, email,
//Debe poder actualizar los datos
//Debe poder eliminar users

const router = Router();

router.get("/", getUsers);
router.get("/:email", getUsersById);
router.post("/", addUser);
//router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
