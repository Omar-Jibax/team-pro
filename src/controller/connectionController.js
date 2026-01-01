const Connection = require("../model/connection")

const catchAsync = require("../../utils/catchAsync")
const {successResponse} = require("../../utils/response")
const {createOne, getAll, getOne, updateOne, deleteOne} = require("../../utils/crud")


exports.createConnection = catchAsync(async(req, res) => {
    const connection = await createOne(Connection)(req.body)
    successResponse(res, connection, "Connection created Successfully", 201)
})

exports.getAllConnections = catchAsync(async(req, res) => {
    const connections = await getAll(Connection)()
    successResponse(res, connections, "Connections retrieved Successfully")
})

exports.getConnectionById = catchAsync(async(req, res) => {
    const connection = await getOne(Connection, req.params.id)()
    successResponse(res, connection, "Connection retrieved Successfully")
})

exports.updateConnection = catchAsync(async(req, res) => {
    const connection = await updateOne(Connection, req.params.id, req.body)()
    successResponse(res, connection, "Connection updated Successfully")
})

exports.deleteConnection = catchAsync(async(req, res) => {
    const connection = await deleteOne(Connection, req.params.id)()
    successResponse(res, connection, "Connection deleted Successfully")
})

