const { Router } = require("express");
const {
  getActivities,
  getActivitiesId,
  deleteActivity,
  addActivity
} = require("./controllers/activities");


const router = Router();

router.get("/", getActivities);
router.get("/:id", getActivitiesId);
router.delete("/:id", deleteActivity);
router.post("/", addActivity);

module.exports = router;
