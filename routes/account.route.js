const router = require("express").Router()
const authController = require("./../controllers/auth.controller")

router
    .post("/credit", authController.credit)
    .post("/debit", authController.debit)

module.exports = router