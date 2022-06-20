export interface UserData {
  accessToken: string
  role: string
  user: User
}

export interface User {
  email: string
  username: string
  passwword: string
  _id: string
}
