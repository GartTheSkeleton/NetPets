
const resolvers = {
    Query: {
        me: async(parent,args,context) => {
            if (context.user) {
                const userData = await User.findOne({_id: context.user._id})
                return userData;
            }
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