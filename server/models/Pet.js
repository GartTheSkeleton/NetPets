const { Schema, model } = require('mongoose');

const petSchema = new Schema(
    {
      nickname: {
        type: String,
        required: true,
        unique: false,
        trim: true
      },
      species: {
        type: String,
        required: true,
        unique: false,
        trim: true
      },
      exp: {
        type: Number,
        default: 0
      },
      cosmetics: {
        type: String,
        default: null
      }
    },
    {
      toJSON: {
        getters: true
      }
    }
  );

const Pet = model('Pet', petSchema);

module.exports = Pet;