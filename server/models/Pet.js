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
            unique: false
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        exp: {
            type: Number,
            default: 0
        },
        cosmetic: {
            type: String,
            default: null
        }
    }
);

const Pet = model('Pet', petSchema);

module.exports = Pet;