const { Schema, model, SchemaTypes } = require('mongoose');

const teacherSchema = new Schema(
  {
    name: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, enum: ['male', 'female', 'other'], required: true },
    class: SchemaTypes.ObjectId,
    courses: [{ type: SchemaTypes.ObjectId, ref: 'Course', required: true }],
    contact: {
      type: {
        address: {
          permanentAddress: { type: String, required: true },
          presentAddress: { type: String, required: true }
        },
        phone: { type: String, required: true },
        email: { type: String, required: true }
      }
    }
  },
  {
    timestamps: true
  }
);

const Teacher = model('Teacher', teacherSchema);

module.exports = Teacher;
