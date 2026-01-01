const express = require("express")
const router = express.Router()

const connectionController = require("../controller/connectionController")

router.route('/')
.get(connectionController.getAllConnections)
.post(connectionController.createConnection)

router.route('/:id')
.get(connectionController.getConnectionById)
.put(connectionController.updateConnection)
.delete(connectionController.deleteConnection)

module.exports = router

