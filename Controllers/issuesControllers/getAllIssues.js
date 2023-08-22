const IssueModel = require("./../../Models/IssueModel")

const getAllIssues = async (req, res) => {
    try {
        const issues = await IssueModel.find({})
        return res.json({
            msg: "Issues fetched successfully",
            issues: issues,
            success: true
        })
    } catch (e) {
        console.log("Error fetching issues", e)
        return res.json({
            msg: "Error fetching issues",
            success: false
        })
    }
}


module.exports = getAllIssues
