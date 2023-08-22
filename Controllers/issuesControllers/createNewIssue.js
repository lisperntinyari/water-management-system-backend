const IssueModel = require("../../Models/IssueModel");
const createNewIssue = async (req, res) => {
    try {
        const { issueName,issueDescription,postedBy } = req.body
        const newIssue = await IssueModel.create({
            issueName,issueDescription,postedBy
        })
        return res.json({
            msg:"New issue created successfully",
            success:true,
            issue: newIssue
        })
    } catch (e) {
        console.log("Error occurred",e)
        return res.json({
            msg:"Error occurred trying to create your issue",
            success:false
        })
    }

}

module.exports = createNewIssue
