export interface IRes {
  res: string
}

export interface ApiAddAppoinment {
  date: number
  patient: string
  service: string
  dentNumber: number
}

export interface ApiUpdateAppoinment {
  date: number
  patient: string
  service: string
  dentNumber: number
  _id: string
}
