const RoleMenu = require("../model/roleMenu")

const catchAsync = require("../../utils/catchAsync")
const {successResponse} = require("../../utils/response")
const {createOne, getAll, getOne, updateOne, deleteOne} = require("../../utils/crud")


exports.createRoleMenu = catchAsync(async(req, res) => {
    const roleMenu = await createOne(RoleMenu)(req.body)
    successResponse(res, roleMenu, "Role menu created Successfully", 201)
})

exports.getAllRoleMenus = catchAsync(async(req, res) => {
    const roleMenus = await getAll(RoleMenu)()
    successResponse(res, roleMenus, "Role menus retrieved Successfully")
})

exports.getRoleMenuById = catchAsync(async(req, res) => {
    const roleMenu = await getOne(RoleMenu, req.params.id)()
    successResponse(res, roleMenu, "Role menu retrieved Successfully")
})

exports.updateRoleMenu = catchAsync(async(req, res) => {
    const roleMenu = await updateOne(RoleMenu, req.params.id, req.body)()
    successResponse(res, roleMenu, "Role menu updated Successfully")
})

exports.deleteRoleMenu = catchAsync(async(req, res) => {
    const roleMenu = await deleteOne(RoleMenu, req.params.id)()
    successResponse(res, roleMenu, "Role menu deleted Successfully")
})

