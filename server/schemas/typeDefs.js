const { gql } = require('apollo-server-express');

/*const typeDefs = gql`
    type Query {
        helloWorld: String
    }
    `;*/

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    friends: [User]
    pet: [Pet]
    items: [String]
    coins: Int
} 

type Pet {
    _id: ID
    nickname: String
    species: String
    exp: Int
    cosmetics: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
    users: [User]
    user(username: String!): User
    pet(_id: ID!): Pet
    pets: [Pet]
  }

type Mutation {
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    createPet(nickname: String!, species: String!, userId: String!): Pet
    addExp(petId: ID!): Pet
    addCoins(userId: ID!, amount: Int!): User
}

` 

module.exports = typeDefs;