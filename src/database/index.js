const mongoose = require('mongoose');
require('../../.env');

mongoose.connect(DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
