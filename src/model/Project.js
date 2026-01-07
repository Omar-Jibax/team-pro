const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    owner_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },

    title: {
      type: String,
      required: true,
      maxlength: 150
    },

    description: {
      type: String
    },

    image_url: {
      type: String,
      maxlength: 500
    },

    visibility: {
      type: String,
      enum: ["public", "private", "team"],
      default: "public",
      index: true
    },

    deadline: {
      type: Date,
      default: null,
      index: true
    },

    progress: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
      index: true
    },

    updated_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
