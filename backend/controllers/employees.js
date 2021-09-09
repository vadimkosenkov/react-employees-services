const Employee = require('../models/Employees');
const errorHandler = require('../utils/error-handler');

module.exports.getAll = async (req, res) => {
  try {
    const searchQuery = req.query.search;
    let users = [];

    users = await Employee.find({});

    if (users) {
      if (searchQuery) {
        users = users.filter(e => {
          const nameRu = `${e.firstNameNative} ${e.lastNameNative}`;
          const nameEn = `${e.firstName} ${e.lastName}`;

          return (
            nameRu.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1 ||
            nameEn.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1
          );
        });
      }
      res.status(200).json(users);
    } else {
      res.status(400).json({ message: 'Bad request' });
    }
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.getById = async (req, res) => {
  try {
    const user = await Employee.findOne({ id: req.params.id });

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findOneAndUpdate(
      { id: req.params.id },
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(employee);
  } catch (e) {
    errorHandler(res, e);
  }
};
