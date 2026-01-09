const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: [true, 'Full name is required'],
        trim: true,
        maxlength: [120, 'Full name cannot exceed 120 characters']
    },
    username: {
        type: String,
        trim: true,
        maxlength: [80, 'Username cannot exceed 80 characters'],

    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        maxlength: [120, 'Email cannot exceed 120 characters'],
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email']
    },
    password_hash: {
        type: String,
        required: [true, 'Password hash is required'],
        maxlength: [255, 'Password hash cannot exceed 255 characters']
    },
    profile_picture: {
        type: String,
        maxlength: [255, 'Profile picture URL cannot exceed 255 characters']
    },
    bio: {
        type: String,
        maxlength: [500, 'Bio cannot exceed 500 characters'],
        trim: true
    },
    university: {
        type: String,
        maxlength: [120, 'University name cannot exceed 120 characters'],
        trim: true
    },
    status: {
        type: String,
        enum: {
            values: ['active', 'inactive', 'suspended', 'deleted'],
            message: 'Status must be one of: active, inactive, suspended, deleted'
        },
        default: 'active'
    },
    is_verified: {
        type: Boolean,
        default: false
    },
    last_login: {
        type: Date,
        default: null
    },
    is_online: {
        type: Boolean,
        default: false
    },
    last_seen: {
        type: Date,
        default: null
    },
    role_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
        default: null
    },
    updated_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null
    }
},
{
    timestamps: true // Automatically adds created_at and updated_at
})

// Indexes

userSchema.index({ username: 1 })
userSchema.index({ role_id: 1 })
userSchema.index({ status: 1 })

module.exports = mongoose.model("User", userSchema)

