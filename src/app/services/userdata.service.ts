import gql from 'graphql-tag'

export const register = gql`
  mutation register($registerPayload: userInput!) {
    register(registerPayload: $registerPayload) {
      token
      user {
        email
        username
        password
      }
    }
  }
`

export const login = gql`
mutation login($loginPayload: loginPayload!) {
  login(loginPayload: $loginPayload) {
    token
    user {
      email
      username
      password
    }
  }
}
`