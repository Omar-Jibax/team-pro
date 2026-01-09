const mongoose = require("mongoose")

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Menu name is required'],
        trim: true,
        maxlength: [100, 'Menu name cannot exceed 100 characters']
    },
    path: {
        type: String,
        required: [true, 'Menu path is required'],
        trim: true,
        maxlength: [255, 'Menu path cannot exceed 255 characters']
    },
    icon: {
        type: String,
        trim: true,
        maxlength: [100, 'Icon cannot exceed 100 characters']
    },
    parent_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Menu',
        default: null
    }
},
{
    timestamps: true
})

// Index for parent_id for better query performance
menuSchema.index({ parent_id: 1 })

// Recursive function to delete all child menus
const deleteChildMenus = async (Menu, parentId) => {
    const childMenus = await Menu.find({ parent_id: parentId })
    for (const child of childMenus) {
        // Recursively delete children of this child
        await deleteChildMenus(Menu, child._id)
        // Delete the child menu
        await Menu.findByIdAndDelete(child._id)
    }
}

// Pre-remove middleware to handle cascade delete (similar to ON DELETE CASCADE)
menuSchema.pre('findOneAndDelete', async function() {
    const menu = await this.model.findOne(this.getQuery())
    if (menu) {
        // Recursively delete all child menus
        await deleteChildMenus(this.model, menu._id)
        // Delete all role_menu entries associated with this menu (cascade delete)
        const RoleMenu = mongoose.model('RoleMenu')
        if (RoleMenu) {
            await RoleMenu.deleteMany({ menu_id: menu._id })
        }
    }
})

module.exports = mongoose.model("Menu", menuSchema)

