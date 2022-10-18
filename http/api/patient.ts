import {$host} from '.'
import {IRes} from '../../types/api'
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

export const deletePatient = async (info: {_id: string}) => {
  const {data} = await $host.delete<IRes>('/patient', {
    params: info,
  })
  return data
}

export const deleteAllPatients = async () => {
  const {data} = await $host.delete<IRes>('/patient/all')
  return data
}

export const updatePatient = async (data: FormData) => {
  const {
    data: {res},
  } = await $host.put<IRes>('/patient', data, {
    headers: {
      'content-Type': 'multipart/form-data',
    },
  })

  return res
}
