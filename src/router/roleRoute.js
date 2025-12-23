const express = require("express")
const router = express.Router()

const roleController = require("../controller/roleController")
router.route('/')
.get(roleController.getAllRoles)
.post(roleController.createRole)

router.route('/:id')
.get(roleController.getRoleById)
.put(roleController.updateRole)
.delete(roleController.deleteRole)

module.exports = router