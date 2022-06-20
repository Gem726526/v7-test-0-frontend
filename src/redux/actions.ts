import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT } from './types'

export const UserLogin = (data: any) => {
  if (data && data.token) {
    return {
      type: LOGIN_SUCCESS,
      data,
    }
  } else {
    return {
      type: LOGIN_ERROR,
      data,
    }
  }
}

export const UserLogout = () => {
  return {
    type: LOGOUT,
  }
}
