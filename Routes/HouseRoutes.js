

const Express = require("express")
const router = Express.Router()


const getAllHouses = require("../Controllers/houseControllers/getAllHouses");
const createNewHouse = require("../Controllers/houseControllers/createNewHouse");



router.get("/all", getAllHouses)
router.post("/create", createNewHouse)



module.exports = router
