const express = require("express");
const router = express.Router();

const {
  addMember,
  getMembers,
  removeMember
} = require("../controller/projectMemberController");

router.post("/", addMember);
router.get("/:projectId", getMembers);
router.delete("/:id", removeMember);

module.exports = router;