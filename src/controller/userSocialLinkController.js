const UserSocialLink = require("../model/userSocialLink")

const catchAsync = require("../../utils/catchAsync")
const {successResponse} = require("../../utils/response")
const {createOne, getAll, getOne, updateOne, deleteOne} = require("../../utils/crud")


exports.createUserSocialLink = catchAsync(async(req, res) => {
    const userSocialLink = await createOne(UserSocialLink)(req.body)
    successResponse(res, userSocialLink, "User social link created Successfully", 201)
})

exports.getAllUserSocialLinks = catchAsync(async(req, res) => {
    const userSocialLinks = await getAll(UserSocialLink)()
    successResponse(res, userSocialLinks, "User social links retrieved Successfully")
})

exports.getUserSocialLinkById = catchAsync(async(req, res) => {
    const userSocialLink = await getOne(UserSocialLink, req.params.id)()
    successResponse(res, userSocialLink, "User social link retrieved Successfully")
})

exports.updateUserSocialLink = catchAsync(async(req, res) => {
    const userSocialLink = await updateOne(UserSocialLink, req.params.id, req.body)()
    successResponse(res, userSocialLink, "User social link updated Successfully")
})

exports.deleteUserSocialLink = catchAsync(async(req, res) => {
    const userSocialLink = await deleteOne(UserSocialLink, req.params.id)()
    successResponse(res, userSocialLink, "User social link deleted Successfully")
})

