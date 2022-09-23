export interface IServicePrice {
  diagnos: string
  price: string
  id: number
}

export interface IAppointment {
  user_id: number
  diagnos_id: number
  time: string
  date: string
  isActive: boolean
}

export interface IAppoinmentInfo extends IUserInfo {
  date: string
}

export interface IGetUser extends IUser {
  id: number
}

export interface IUser {
  fullname: string
  avatar: string
  phone: string
  _id: string
}

export interface IService {
  diagnos: string
  price: string
  _id: string
}

export interface IUserInfoWithDate extends IUserInfo {
  date: string
}

export interface IUserInfo {
  patient: IUser
  service: IService
  time: string
  price: string
  active?: boolean
}
export interface IDateInfo {
  data: IUserInfo[]
  title: string
}
