const mongoose = require("mongoose")

const roleMenuSchema = new mongoose.Schema({
    role_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
        required: [true, 'Role ID is required']
    },
    menu_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Menu',
        required: [true, 'Menu ID is required']
    }
},
{
    timestamps: true
})

// Unique constraint: one role can only have one entry per menu
roleMenuSchema.index({ role_id: 1, menu_id: 1 }, { unique: true })

// Indexes
roleMenuSchema.index({ role_id: 1 })
roleMenuSchema.index({ menu_id: 1 })

module.exports = mongoose.model("RoleMenu", roleMenuSchema)

