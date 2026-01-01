const express = require("express")
const router = express.Router()

const userSkillController = require("../controller/userSkillController")

router.route('/')
.get(userSkillController.getAllUserSkills)
.post(userSkillController.createUserSkill)

router.route('/:id')
.get(userSkillController.getUserSkillById)
.put(userSkillController.updateUserSkill)
.delete(userSkillController.deleteUserSkill)

module.exports = router

