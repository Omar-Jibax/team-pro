const UserSkill = require("../model/userSkill")

const catchAsync = require("../../utils/catchAsync")
const {successResponse} = require("../../utils/response")
const {createOne, getAll, getOne, updateOne, deleteOne} = require("../../utils/crud")


exports.createUserSkill = catchAsync(async(req, res) => {
    const userSkill = await createOne(UserSkill)(req.body)
    successResponse(res, userSkill, "User skill created Successfully", 201)
})

exports.getAllUserSkills = catchAsync(async(req, res) => {
    const userSkills = await getAll(UserSkill)()
    successResponse(res, userSkills, "User skills retrieved Successfully")
})

exports.getUserSkillById = catchAsync(async(req, res) => {
    const userSkill = await getOne(UserSkill, req.params.id)()
    successResponse(res, userSkill, "User skill retrieved Successfully")
})

exports.updateUserSkill = catchAsync(async(req, res) => {
    const userSkill = await updateOne(UserSkill, req.params.id, req.body)()
    successResponse(res, userSkill, "User skill updated Successfully")
})

exports.deleteUserSkill = catchAsync(async(req, res) => {
    const userSkill = await deleteOne(UserSkill, req.params.id)()
    successResponse(res, userSkill, "User skill deleted Successfully")
})

