const mongoose = require("mongoose")

const userInterestSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User ID is required']
    },
    skill_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Skill',
        required: [true, 'Skill ID is required']
    }
},
{
    timestamps: true
})

// Unique constraint: one user can only have one entry per skill interest
userInterestSchema.index({ user_id: 1, skill_id: 1 }, { unique: true })

// Indexes
userInterestSchema.index({ user_id: 1 })
userInterestSchema.index({ skill_id: 1 })

module.exports = mongoose.model("UserInterest", userInterestSchema)

