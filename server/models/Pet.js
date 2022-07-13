const { Schema, model } = require('mongoose');

const petSchema = new Schema(
    {
      
    },
    {
      toJSON: {
        getters: true
      }
    }
  );

const Pet = model('Pet', petSchema);

module.exports = Pet;