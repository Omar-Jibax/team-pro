const mongoose =  require("mongoose")

const roleSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'Role name is required'],
        trim: true
    },
    description : {
        type: String,
        default: 'No description provide',
        trim: true
    },
    role_level: {
        type: Number,
        require: [true, 'Role level is required'],
        enum: {
            values: [1,2,3],
            message : 'Role level must be 1 (admin) 2. (mentor) 3 (student)'
        }
    }
},
{
    timeseries: true
}
)

module.exports =  mongoose.model("Role", roleSchema)