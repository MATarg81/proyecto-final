const { Router } = require("express");
const {
    setFav,
    removeFav

} = require("./controllers/favs");

const router = Router();

router.get("/:id", setFav);
router.delete("/:id", removeFav);


module.exports = router;