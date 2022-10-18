import {IService, IUser, IUserInfo} from './user'

export interface IInitialState {
  service: IService
  isVisibleService: boolean
  patient: IUser
  isVisiblePatient: boolean
  apointment: IUserInfo
  isVisibleApoinment: boolean
}
