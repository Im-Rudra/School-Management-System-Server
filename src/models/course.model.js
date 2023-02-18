const { Schema, model, SchemaTypes } = require('mongoose');

const courseSchema = new Schema(
  {
    courseTitle: { type: String, required: true },
    courseCode: { type: String, required: true, unique: true },
    class: { type: SchemaTypes.ObjectId, required: true, ref: 'Class' },
    teacher: { type: SchemaTypes.ObjectId, required: true, ref: 'Teacher' }
  },
  {
    timestamps: true
  }
);

courseSchema.index({ courseTitle: 1, class: 1 }, { unique: true });
const Course = model('Course', courseSchema);

module.exports = Course;
