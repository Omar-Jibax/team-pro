const express = require("express");
const router = express.Router();
const projectSkill = require("../controller/projectSkill");

router.post("/", projectSkill.add);
router.get("/:projectId", projectSkill.listByProject);
router.delete("/:id", projectSkill.remove);

module.exports = router;
