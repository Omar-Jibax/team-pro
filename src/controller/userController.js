const User = require("../model/user")

const catchAsync = require("../../utils/catchAsync")
const {successResponse} = require("../../utils/response")
const {createOne, getAll, getOne, updateOne, deleteOne} = require("../../utils/crud")


exports.createUser = catchAsync(async(req, res) => {
    const user = await createOne(User)(req.body)
    successResponse(res, user, "User created Successfully", 201)
})

exports.getAllUsers = catchAsync(async(req, res) => {
    const users = await getAll(User)()
    successResponse(res, users, "Users retrieved Successfully")
})

exports.getUserById = catchAsync(async(req, res) => {
    const user = await getOne(User, req.params.id)()
    successResponse(res, user, "User retrieved Successfully")
})

exports.updateUser = catchAsync(async(req, res) => {
    const user = await updateOne(User, req.params.id, req.body)()
    successResponse(res, user, "User updated Successfully")
})

exports.deleteUser = catchAsync(async(req, res) => {
    const user = await deleteOne(User, req.params.id)()
    successResponse(res, user, "User deleted Successfully")
})

