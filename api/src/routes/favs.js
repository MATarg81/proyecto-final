const { Router } = require("express");
const {
    setFav,
    removeFav,
    getFavs

} = require("./controllers/favs");

const router = Router();

router.get("/", getFavs);
router.post("/", setFav);
router.delete("/", removeFav);


module.exports = router;