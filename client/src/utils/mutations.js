import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_PET = gql`
mutation CreatePet($nickname: String!, $userId: String!, $species: String!) {
  createPet(nickname: $nickname, userId: $userId, species: $species) {
    _id
    nickname
    species
    exp
    cosmetics
  }
}
`

