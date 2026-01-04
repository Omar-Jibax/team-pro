const ProjectSkill = require("../model/projectSkill");

/**
 * Add skill to project
 */
const add = async (req, res) => {
  try {
    const { project_id, skill_id } = req.body;

    const record = await ProjectSkill.create({
      project_id,
      skill_id,
    });

    res.status(201).json({
      success: true,
      message: "Skill added to project",
      data: record,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**
 * Get skills of a project
 */
const listByProject = async (req, res) => {
  try {
    const { projectId } = req.params;

    const data = await ProjectSkill.find({ project_id: projectId });

    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * Remove skill from project
 */
const remove = async (req, res) => {
  try {
    const { id } = req.params;

    await ProjectSkill.findByIdAndDelete(id);

    res.json({
      success: true,
      message: "Skill removed from project",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { add, listByProject, remove };
