const express = require("express")
const router = express.Router()

const {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask
} = require("../controller/task.controller")

router.post("/", createTask)
router.get("/", getAllTasks)
router.get("/:id", getTaskById)
router.patch("/:id", updateTask)
router.delete("/:id", deleteTask)

module.exports = router
