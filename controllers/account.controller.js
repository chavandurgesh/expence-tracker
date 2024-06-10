const asyncHandler = require("express-async-handler")
const Account = require("../models/Account")

exports.credit = asyncHandler(async (req, res) => {
    await Account.credit(req.body)
    res.json({ message: "Account Credit Success" })
})
exports.debit = asyncHandler(async (req, res) => {
    await Account, credit({ ...req.body, type: "debit" })
    res.json({ message: "Account Debit Success" })
})