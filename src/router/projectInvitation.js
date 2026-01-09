const express = require("express");
const router = express.Router();
const projectInvitation = require("../controller/projectInvitation");

router.post("/", projectInvitation.send);
router.put("/:id", projectInvitation.respond);
router.get("/user/:userId", projectInvitation.listByUser);

module.exports = router;
