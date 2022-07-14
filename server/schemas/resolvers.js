const { AuthenticationError } = require('apollo-server-express');
const { User, Pet } = require('../models');

const { signToken } = require('../utils/auth');

const resolvers = {
    
    Query: {
        me: async(parent,args,context) => {
            if (context.user) {
                const userData = await User.findOne({_id: context.user._id})
                  .select('-__v -password')
                  .populate('pet')
                
                  return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
        users: async () => {
            return User.find()
        },
        user: async (parent, { username }) => {
            return User.findOne({username});
        },
        pet: async (parent, {_id}) => {
            return Pet.findone({_id});
        }
    },
    Mutation: {
        createUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
            
          },
        createPet: async (parent, args) => {
            const pet = await Pet.create(args)
            return {pet};
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
            return { token, user };
          },
        addExp: async (parent, args, context) => {
            if (context.pet) {
                thisPet = await Pet.findByIdAndUpdate(
                    { _id: petId },
                    { $inc: { exp: 1 } }, //increments the exp by one
                    { new: true }
                );
        
                return thisPet;
            }
        }
    }
    
}

module.exports = resolvers;