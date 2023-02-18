const { Schema, model, SchemaTypes } = require('mongoose');

const studentSchema = new Schema(
  {
    name: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, required: true, enum: ['male', 'female', 'other'] },
    class: { type: SchemaTypes.ObjectId, ref: 'Class', required: true },
    rollNumber: { type: String, required: true },
    contact: {
      type: {
        address: { type: String, required: true },
        phone: { type: String, required: true },
        email: String
      }
    }
  },
  {
    timestamps: true
  }
);

// creates an unique index on the combination of class & rollNumber
studentSchema.index({ class: 1, rollNumber: 1 }, { unique: true });
const Student = model('Student', studentSchema);

module.exports = Student;
