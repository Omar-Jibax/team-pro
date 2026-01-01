const express = require("express")
const router = express.Router()

const userInterestController = require("../controller/userInterestController")

router.route('/')
.get(userInterestController.getAllUserInterests)
.post(userInterestController.createUserInterest)

router.route('/:id')
.get(userInterestController.getUserInterestById)
.put(userInterestController.updateUserInterest)
.delete(userInterestController.deleteUserInterest)

module.exports = router

