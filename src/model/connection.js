const mongoose = require("mongoose")

const connectionSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User ID is required']
    },
    target_user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Target user ID is required']
    },
    status: {
        type: String,
        enum: {
            values: ['pending', 'accepted', 'rejected', 'blocked'],
            message: 'Status must be one of: pending, accepted, rejected, blocked'
        },
        default: 'pending'
    }
},
{
    timestamps: true
})

// Unique constraint: one user can only have one connection entry per target user
connectionSchema.index({ user_id: 1, target_user_id: 1 }, { unique: true })

// Indexes
connectionSchema.index({ user_id: 1 })
connectionSchema.index({ target_user_id: 1 })
connectionSchema.index({ status: 1 })

module.exports = mongoose.model("Connection", connectionSchema)

