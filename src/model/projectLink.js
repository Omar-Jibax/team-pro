const mongoose = require("mongoose")

const projectLinkSchema = new mongoose.Schema(
    {
        project: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Project",
            required: true
        },
        title: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        type: {
            type: String,
            enum: ["github", "live", "docs", "other"],
            default: "other"
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("ProjectLink", projectLinkSchema)
