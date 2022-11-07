const { Router } = require("express");
const {
  addUserActivity
} = require("./controllers/registerActivity");


const router = Router();

router.get("/", addUserActivity);


module.exports = router;