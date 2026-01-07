const Task = require("../model/task")

const catchAsync = require("../../utils/catchAsync")
const { successResponse } = require("../../utils/response")
const { createOne, getAll, getOne, updateOne, deleteOne } = require("../../utils/crud")

exports.createTask = catchAsync(async (req, res) => {
    const task = await createOne(Task)(req.body)
    successResponse(res, task, "Task created successfully", 201)
})

exports.getAllTasks = catchAsync(async (req, res) => {
    const tasks = await getAll(Task)()
    successResponse(res, tasks, "Tasks retrieved successfully")
})

exports.getTaskById = catchAsync(async (req, res) => {
    const task = await getOne(Task, req.params.id)()
    successResponse(res, task, "Task retrieved successfully")
})

exports.updateTask = catchAsync(async (req, res) => {
    const task = await updateOne(Task, req.params.id, req.body)()
    successResponse(res, task, "Task updated successfully")
})

exports.deleteTask = catchAsync(async (req, res) => {
    const task = await deleteOne(Task, req.params.id)()
    successResponse(res, task, "Task deleted successfully")
})
