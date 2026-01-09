const express = require("express")
const router = express.Router()

const roleMenuController = require("../controller/roleMenuController")

router.route('/')
    .get(roleMenuController.getAllRoleMenus)
    .post(roleMenuController.createRoleMenu)

router.route('/:id')
    .get(roleMenuController.getRoleMenuById)
    .put(roleMenuController.updateRoleMenu)
    .delete(roleMenuController.deleteRoleMenu)

module.exports = router

