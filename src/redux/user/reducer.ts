import { UserReducerState } from './user-reducer'
import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from '../types'

const initialState: UserReducerState = {
  IsUserLogged: false,
  UserData: null,
  triggerLogin: false,
}

export const UserReducer: any = (
  state: UserReducerState = initialState,
  action: any
) => {
  switch (action.type) {
    case LOGIN_ERROR:
      return { ...state, IsUserLogged: false }
    case LOGIN_SUCCESS:
      return { ...state, UserData: action.data, IsUserLogged: true }
    case LOGOUT:
      return { ...state, UserData: null, IsUserLogged: false }
    default:
      return state
  }
}
