const Employee = require('../models/Employees');
const errorHandler = require('../utils/error-handler');

module.exports.setRole = async (req, res) => {
    try {
        const employee = await Employee.findOneAndUpdate(
            { id: req.params.id },
            {
                $set: req.body,
            },
            { new: true },
        );
        res.status(200).json(employee);
    } catch (e) {
        errorHandler(res, e);
    }
};
