const express = require('express');
const mongoose = require('mongoose');
const employeeRoutes = require('./routes/employees');
const authRoutes = require('./routes/auth');
const roleRoute = require('./routes/role');
const keys = require('./config/keys');
const app = express();
const router = express.Router();

mongoose
  .connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('mongoDB connected'))
  .catch(error => console.log(error));

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require('cors')());

app.use('/api/employees', employeeRoutes);
app.use('/auth/login', authRoutes);
app.use('/api/role', roleRoute);

app.use(
  '/',
  router.get('/', (req, res) => {
    res.status(200).json('server started!');
  })
);

module.exports = app;
