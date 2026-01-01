const express = require("express")
const router = express.Router()

const skillController = require("../controller/skillController")

router.route('/')
.get(skillController.getAllSkills)
.post(skillController.createSkill)

router.route('/:id')
.get(skillController.getSkillById)
.put(skillController.updateSkill)
.delete(skillController.deleteSkill)

module.exports = router

