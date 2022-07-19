const { AuthenticationError } = require('apollo-server-express');
const { User, Pet } = require('../models');

const { signToken } = require('../utils/auth');

const resolvers = {
    
    Query: {
        me: async(parent,args,context) => {
            if (context.user) {
                return await User.findOne({_id: context.user._id})
                  .populate("pet")
                  .select('-__v -password')
            }

            throw new AuthenticationError('Not logged in');
        },
        users: async () => {
            return User.find()
        },
        user: async (parent, { username }) => {
            const user = await User.findOne({username}).populate({path: "pet"})
            return user
        },
        pet: async (parent, {_id}) => {
            return Pet.findOne({_id});
        },
        pets: async () => {
            return Pet.find()
        }
    },
    Mutation: {
        createUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
            
          },
        createPet: async (parent, {species, nickname, userId}) => {
            const pet = await Pet.create({species, nickname})

            const user = await User.findOneAndUpdate({_id: userId}, {$push: {pet: pet._id}}, {new:true})
            console.log(user)
            return user;
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