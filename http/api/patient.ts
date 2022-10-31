import {$host, Routs} from '.'
import {IRes} from '../../types/api'
import {IUser} from '../../types/user'

export const addPatient = async (data: FormData) => {
  const {
    data: {res},
  } = await $host.post<{res: string}>(Routs.PATIENT, data, {
    headers: {
      'content-Type': 'multipart/form-data',
    },
  })
  return res
}

export const searchPatient = async (fullname: string) => {
  const {data} = await $host.get<IUser[]>(Routs.PATIENT_SEARCH, {
    params: {fullname},
  })
  return data
}

export const deletePatient = async (info: {_id: string}) => {
  const {data} = await $host.delete<IRes>(Routs.PATIENT, {
    params: info,
  })
  return data
}

export const deleteAllPatients = async () => {
  const {data} = await $host.delete<IRes>(Routs.PATIENT_DELETE_ALL)
  return data
}

export const updatePatient = async (data: FormData) => {
  const {
    data: {res},
  } = await $host.put<IRes>(Routs.PATIENT, data, {
    headers: {
      'content-Type': 'multipart/form-data',
    },
  })

  return res
}
