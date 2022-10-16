const { Router } = require("express");
const {
  getActivities,
  deleteActivity,
  addActivity
} = require("./controllers/activities");


const router = Router();

router.get("/", getActivities);
router.delete("/:name", deleteActivity);
router.post("/", addActivity);

module.exports = router;
