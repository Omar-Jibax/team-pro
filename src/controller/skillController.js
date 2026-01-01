const Skill = require("../model/skill")

const catchAsync = require("../../utils/catchAsync")
const {successResponse} = require("../../utils/response")
const {createOne, getAll, getOne, updateOne, deleteOne} = require("../../utils/crud")


exports.createSkill = catchAsync(async(req, res) => {
    const skill = await createOne(Skill)(req.body)
    successResponse(res, skill, "Skill created Successfully", 201)
})

exports.getAllSkills = catchAsync(async(req, res) => {
    const skills = await getAll(Skill)()
    successResponse(res, skills, "Skills retrieved Successfully")
})

exports.getSkillById = catchAsync(async(req, res) => {
    const skill = await getOne(Skill, req.params.id)()
    successResponse(res, skill, "Skill retrieved Successfully")
})

exports.updateSkill = catchAsync(async(req, res) => {
    const skill = await updateOne(Skill, req.params.id, req.body)()
    successResponse(res, skill, "Skill updated Successfully")
})

exports.deleteSkill = catchAsync(async(req, res) => {
    const skill = await deleteOne(Skill, req.params.id)()
    successResponse(res, skill, "Skill deleted Successfully")
})

