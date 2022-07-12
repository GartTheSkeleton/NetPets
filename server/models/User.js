const { Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Enter Valid Email Address!']
        },
        password: {
            type: String,
            required: true,
            minlength: 6
        },
        coins: {
            type: Number,
            default: 0,
        },
        items: [
            {
                type: String
            }
        ],
        pets: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Pet'
            }
        ],
        friends: [
            {
              type: Schema.Types.ObjectId,
              ref: 'User'
            }
          ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

//still need password hashing and middleware

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });

userSchema.virtual('itemcount').get(function() {
    return this.items.length;
})

const User = model('User', userSchema);

module.exports = User;