const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  id: {
    type: Number,
    unique: true,
  },
  nameRu: {
    type: String,
  },
  nameEn: {
    type: String,
  },
  avatarSrc: {
    type: String,
    default: '',
  },
  department: {
    type: String,
  },
  roomNumber: {
    type: String,
  },
  mobilePhone: {
    type: String,
  },
  internalPhone: {
    type: String,
  },
  cNumber: {
    type: String,
  },
  male: {
    type: Boolean,
    default: true,
  },
  email: {
    type: String,
    default: '',
  },
  skype: {
    type: String,
    default: '',
  },
  dateHired: {
    type: Number,
    default: '',
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  addressBookRedesign: {
    type: Boolean,
    default: true,
  },
  vacation: {
    status: { type: Boolean },
    finish_date: { type: Number },
  },
});

module.exports = mongoose.model('employee', employeeSchema);
