const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    friends: [User]
    pets: [Pet]
    items: [String]
}

type Pet {
    _id: ID
    nickname: String
    species: String
    owner: User
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
  }

type Mutation {
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): User
    createPet(nickname: String!, species: String!, owner: User): Pet
    addExp(petId: ID!): Pet
}

`