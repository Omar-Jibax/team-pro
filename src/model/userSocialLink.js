const mongoose = require("mongoose")

const userSocialLinkSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User ID is required']
    },
    platform: {
        type: String,
        required: [true, 'Platform is required'],
        trim: true,
        maxlength: [50, 'Platform cannot exceed 50 characters']
    },
    url: {
        type: String,
        required: [true, 'URL is required'],
        trim: true,
        maxlength: [500, 'URL cannot exceed 500 characters']
    }
},
{
    timestamps: true
})

// Unique constraint: one user can only have one entry per platform
userSocialLinkSchema.index({ user_id: 1, platform: 1 }, { unique: true })

// Indexes
userSocialLinkSchema.index({ user_id: 1 })

module.exports = mongoose.model("UserSocialLink", userSocialLinkSchema)

