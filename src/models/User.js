const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
    },
    senha: {
      type: String,
      require: true,
    },
    nivel: {
      type: String,
      require: true,
    },
    produtos: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product',
      },
    ],
  },
  { timestamps: true },
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
