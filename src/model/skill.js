const mongoose = require("mongoose")

const skillSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'Skill name is required'],
        trim: true,
        maxlength: [80, 'Skill name cannot exceed 80 characters']
    },
    category: {
        type: String,
        trim: true,
        maxlength: [80, 'Category cannot exceed 80 characters']
    }
},
{
    timestamps: true
})

// Indexes
skillSchema.index({ category: 1 })

module.exports = mongoose.model("Skill", skillSchema)

