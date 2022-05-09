const mongoose = require("mongoose");

const courseSchema = mongoose.Schema(
  {
    courseName: {
      type: String,
      required: true,
    },
    courseDescription: {
      type: String,
      required: true,
    },

    courseThumbnail: {
      type: String,
      required: true,
    },
    vidLabel: {
      type: String,
    },
    createdAt: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    isEnrolled:{
      type:Boolean,
      default:false
    }
  },
  {
    timestamps: true,
  }
);

const CourseModel = mongoose.model("Course", courseSchema);

module.exports = CourseModel;
