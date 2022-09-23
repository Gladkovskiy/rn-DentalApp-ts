import {$host} from '.'
import {IUser} from '../../types/user'

export const addPatient = async (data: FormData) => {
  const {
    data: {res},
  } = await $host.post<{res: string}>('/patient', data, {
    headers: {
      'content-Type': 'multipart/form-data',
    },
  })
  return res
}

export const searchPatient = async (fullname: string) => {
  const {data} = await $host.get<IUser[]>('/patient/search', {
    params: {fullname},
  })
  return data
}
