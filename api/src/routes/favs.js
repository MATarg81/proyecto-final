const { Router } = require("express");
const {
    setFav,
    removeFav

} = require("./controllers/favs");

const router = Router();

router.get("/", setFav);
router.delete("/", removeFav);


module.exports = router;