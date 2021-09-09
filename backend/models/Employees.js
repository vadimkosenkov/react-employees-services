const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  id: {
    type: Number,
    unique: true,
  },
  firstNameNative: {
    type: String,
  },
  lastNameNative: {
    type: String,
  },
  middleNameNative: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
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
  email: {
    type: String,
    default: '',
  },
  gender: {
    type: String,
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
  password: {
    type: String,
  },
  role: {
    type: String,
  },
});

module.exports = mongoose.model('employee', employeeSchema);
