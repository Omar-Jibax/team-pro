const express = require("express")
const router = express.Router()

const menuController = require("../controller/menuController")

router.route('/')
    .get(menuController.getAllMenus)
    .post(menuController.createMenu)

router.route('/:id')
    .get(menuController.getMenuById)
    .put(menuController.updateMenu)
    .delete(menuController.deleteMenu)

module.exports = router

