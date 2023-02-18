const { Schema, model, SchemaTypes } = require('mongoose');

const classSchema = new Schema(
  {
    className: { type: Number, required: true },
    group: { type: String, default: 'N/A', required: true },
    section: { type: String, required: true },
    classTeacher: { type: SchemaTypes.ObjectId, ref: 'Teacher', required: true }
  },
  {
    timestamps: true
  }
);

// creates an unique index on the combination of className & section
classSchema.index({ className: 1, section: 1 }, { unique: true });
const Class = model('Class', classSchema);

module.exports = Class;
