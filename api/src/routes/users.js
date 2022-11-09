const { Router } = require("express");
const {
  getUsers,
  deleteUser,
  addUser,
  updateUser
} = require("./controllers/users");

//Trae todos los users desde la DB
//Trae los users por nombre, apellido, email,
//Debe poder actualizar los datos
//Debe poder eliminar users

const router = Router();

router.get("/", getUsers);
router.post("/", addUser);
router.delete("/:id", deleteUser);
router.patch("/", updateUser)

module.exports = router;
