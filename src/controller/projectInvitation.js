const ProjectInvitation = require("../model/projectInvitation");

/**
 * Send invitation
 */
const send = async (req, res) => {
  try {
    const { project_id, sender_id, receiver_id } = req.body;

    const invitation = await ProjectInvitation.create({
      project_id,
      sender_id,
      receiver_id,
    });

    res.status(201).json({
      success: true,
      message: "Invitation sent",
      data: invitation,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**
 * Accept / Reject invitation
 */
const respond = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    await ProjectInvitation.findByIdAndUpdate(id, { status });

    res.json({
      success: true,
      message: `Invitation ${status}`,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * List invitations for user
 */
const listByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const invitations = await ProjectInvitation.find({
      receiver_id: userId,
    });

    res.json({ success: true, data: invitations });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { send, respond, listByUser };
