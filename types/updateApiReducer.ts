import {IService, IUser} from './user'

export interface IInitialState {
  service: IService
  isVisibleService: boolean
  patient: IUser
  isVisiblePatient: boolean
}
