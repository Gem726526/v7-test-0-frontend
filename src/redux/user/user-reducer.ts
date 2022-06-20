import { UserData } from '../../app/model/user-data'

export class UserReducerState {
  IsUserLogged!: boolean
  UserData!: UserData | null
  triggerLogin!: boolean
}
