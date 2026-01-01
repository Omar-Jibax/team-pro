const mongoose = require("mongoose")

const userSkillSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User ID is required']
    },
    skill_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Skill',
        required: [true, 'Skill ID is required']
    },
    level: {
        type: Number,
        required: [true, 'Level is required'],
        min: [1, 'Level must be between 1 and 5'],
        max: [5, 'Level must be between 1 and 5'],
        validate: {
            validator: Number.isInteger,
            message: 'Level must be an integer'
        }
    }
},
{
    timestamps: true
})

// Unique constraint: one user can only have one entry per skill
userSkillSchema.index({ user_id: 1, skill_id: 1 }, { unique: true })

// Indexes
userSkillSchema.index({ user_id: 1 })
userSkillSchema.index({ skill_id: 1 })

module.exports = mongoose.model("UserSkill", userSkillSchema)

