const UserInterest = require("../model/userInterest")

const catchAsync = require("../../utils/catchAsync")
const {successResponse} = require("../../utils/response")
const {createOne, getAll, getOne, updateOne, deleteOne} = require("../../utils/crud")


exports.createUserInterest = catchAsync(async(req, res) => {
    const userInterest = await createOne(UserInterest)(req.body)
    successResponse(res, userInterest, "User interest created Successfully", 201)
})

exports.getAllUserInterests = catchAsync(async(req, res) => {
    const userInterests = await getAll(UserInterest)()
    successResponse(res, userInterests, "User interests retrieved Successfully")
})

exports.getUserInterestById = catchAsync(async(req, res) => {
    const userInterest = await getOne(UserInterest, req.params.id)()
    successResponse(res, userInterest, "User interest retrieved Successfully")
})

exports.updateUserInterest = catchAsync(async(req, res) => {
    const userInterest = await updateOne(UserInterest, req.params.id, req.body)()
    successResponse(res, userInterest, "User interest updated Successfully")
})

exports.deleteUserInterest = catchAsync(async(req, res) => {
    const userInterest = await deleteOne(UserInterest, req.params.id)()
    successResponse(res, userInterest, "User interest deleted Successfully")
})

