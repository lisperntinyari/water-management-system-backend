const Express = require("express")
const getAllIssues = require("../Controllers/issuesControllers/getAllIssues");
const createNewIssue = require("../Controllers/issuesControllers/createNewIssue");
const router = Express.Router()




router.get("/all", getAllIssues)
router.post("/create", createNewIssue)



module.exports = router
