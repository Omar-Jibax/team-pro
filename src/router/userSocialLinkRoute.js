const express = require("express")
const router = express.Router()

const userSocialLinkController = require("../controller/userSocialLinkController")

router.route('/')
.get(userSocialLinkController.getAllUserSocialLinks)
.post(userSocialLinkController.createUserSocialLink)

router.route('/:id')
.get(userSocialLinkController.getUserSocialLinkById)
.put(userSocialLinkController.updateUserSocialLink)
.delete(userSocialLinkController.deleteUserSocialLink)

module.exports = router

