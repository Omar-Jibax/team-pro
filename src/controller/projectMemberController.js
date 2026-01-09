const ProjectMember = require("../model/ProjectMember");

// Add user to project
exports.addMember = async (req, res) => {
  try {
    const member = await ProjectMember.create(req.body);
    res.status(201).json(member);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get project members
exports.getMembers = async (req, res) => {
  try {
    const members = await ProjectMember.find({
      project_id: req.params.projectId
    }).populate("user_id");

    res.json(members);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Remove member
exports.removeMember = async (req, res) => {
  try {
    await ProjectMember.findByIdAndDelete(req.params.id);
    res.json({ message: "Member removed" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
