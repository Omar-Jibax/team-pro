const Menu = require("../model/menu")

const catchAsync = require("../../utils/catchAsync")
const {successResponse} = require("../../utils/response")
const {createOne, getAll, getOne, updateOne, deleteOne} = require("../../utils/crud")


exports.createMenu = catchAsync(async(req, res) => {
    const menu = await createOne(Menu)(req.body)
    successResponse(res, menu, "Menu created Successfully", 201)
})

exports.getAllMenus = catchAsync(async(req, res) => {
    const menus = await getAll(Menu)()
    successResponse(res, menus, "Menus retrieved Successfully")
})

exports.getMenuById = catchAsync(async(req, res) => {
    const menu = await getOne(Menu, req.params.id)()
    successResponse(res, menu, "Menu retrieved Successfully")
})

exports.updateMenu = catchAsync(async(req, res) => {
    const menu = await updateOne(Menu, req.params.id, req.body)()
    successResponse(res, menu, "Menu updated Successfully")
})

exports.deleteMenu = catchAsync(async(req, res) => {
    const menu = await deleteOne(Menu, req.params.id)()
    successResponse(res, menu, "Menu deleted Successfully")
})

