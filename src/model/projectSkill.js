const mongoose = require("mongoose");

/**
 * ProjectSkill Schema
 * Links projects and skills (many-to-many)
 */
const projectSkillSchema = new mongoose.Schema(
  {
    project_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },

    skill_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Skill",
      required: true,
    },
  },
  { timestamps: true }
);

// Prevent duplicate skill in same project
projectSkillSchema.index(
  { project_id: 1, skill_id: 1 },
  { unique: true }
);

module.exports = mongoose.model("ProjectSkill", projectSkillSchema);
