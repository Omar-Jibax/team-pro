const express = require("express")
const router = express.Router()

const {
    createProjectLink,
    getAllProjectLinks,
    getProjectLinkById,
    updateProjectLink,
    deleteProjectLink
} = require("../controller/projectLink.controller")

router.post("/", createProjectLink)
router.get("/", getAllProjectLinks)
router.get("/:id", getProjectLinkById)
router.patch("/:id", updateProjectLink)
router.delete("/:id", deleteProjectLink)

module.exports = router
