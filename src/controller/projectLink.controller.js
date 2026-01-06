const ProjectLink = require("../model/projectLink")

const catchAsync = require("../../utils/catchAsync")
const { successResponse } = require("../../utils/response")
const { createOne, getAll, getOne, updateOne, deleteOne } = require("../../utils/crud")

exports.createProjectLink = catchAsync(async (req, res) => {
    const projectLink = await createOne(ProjectLink)(req.body)
    successResponse(res, projectLink, "Project link created successfully", 201)
})

exports.getAllProjectLinks = catchAsync(async (req, res) => {
    const projectLinks = await getAll(ProjectLink)()
    successResponse(res, projectLinks, "Project links retrieved successfully")
})

exports.getProjectLinkById = catchAsync(async (req, res) => {
    const projectLink = await getOne(ProjectLink, req.params.id)()
    successResponse(res, projectLink, "Project link retrieved successfully")
})

exports.updateProjectLink = catchAsync(async (req, res) => {
    const projectLink = await updateOne(ProjectLink, req.params.id, req.body)()
    successResponse(res, projectLink, "Project link updated successfully")
})

exports.deleteProjectLink = catchAsync(async (req, res) => {
    const projectLink = await deleteOne(ProjectLink, req.params.id)()
    successResponse(res, projectLink, "Project link deleted successfully")
})
