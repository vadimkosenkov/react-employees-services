const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Employee = require('../models/Employees');
const key = require('../config/keys');
const errorHandler = require('../utils/error-handler');

module.exports.login = async (req, res) => {
    try {
        const candidate = await Employee.findOne({ email: req.body.email });
        if (candidate) {
            const passwordResult = req.body.password === candidate.password;
            if (passwordResult) {
                const token = jwt.sign(
                    {
                        name: `${candidate.firstName} ${candidate.lastName}`,
                        src: candidate.avatarSrc,
                        role: candidate.role,
                        email: candidate.email,
                    },
                    key.jwt,
                    { expiresIn: 3600 },
                );
                res.status(200).json({ token: `Bearer ${token}` });
            } else {
                res.status(401).json({ message: 'Invalid password' });
            }
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (e) {
        errorHandler(res, e);
    }
};
