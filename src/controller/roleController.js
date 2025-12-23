const Role = require("../model/role")

const catchAsync  = require("../../utils/catchAsync")
const {successResponse} = require("../../utils/response")
const {createOne, getAll, getOne, updateOne, deleteOne} = require("../../utils/crud")


exports.createRole = catchAsync(async(req, res) => {
    const {role_level} = req.body;
    if(role_level ===1 ) {
        const error = new Error("This role level (1) only admin can allowed")
        error.statusCode = 403; // Forbidden
        throw error;
       
    } 
    const role = await createOne(Role)(req.body)
    successResponse(res, role, "Role created Successfully" , 201)
})

exports.getAllRoles = catchAsync(async(req, res) => {
    const roles = await getAll(Role)()
    successResponse(res, roles, "Role retrieved  Successfully")
})

exports.getRoleById = catchAsync(async(req, res) => {
    const role = await getOne(Role, req.params.id)()
    successResponse(res, role, "Role retrieved  Successfully")
})

exports.updateRole = catchAsync(async(req, res) => {
    const role = await updateOne(Role, req.params.id, req.body)()
    successResponse(res, role, "Role updated  Successfully")
})

exports.deleteRole = catchAsync(async(req, res) => {
    const role = await deleteOne(Role, req.params.id)()
    successResponse(res, role, "Role deleted  Successfully")
})
