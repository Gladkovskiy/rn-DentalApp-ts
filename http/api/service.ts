import {$host, Routs} from '.'
import {IRes} from '../../types/api'
import {IService} from '../../types/user'

export const addService = async (data: IService) => {
  const {
    data: {res},
  } = await $host.post<{res: string}>(Routs.SERVICE, data)
  return res
}

export const searchService = async (diagnos: string) => {
  const {data} = await $host.get<IService[]>(Routs.SERVICE_SEARCH, {
    params: {diagnos},
  })
  return data
}

export const deleteService = async (info: {_id: string}) => {
  const {data} = await $host.delete<IRes>(Routs.SERVICE, {
    params: info,
  })
  return data
}

export const deleteAllServices = async () => {
  const {data} = await $host.delete<IRes>(Routs.SERVICE_DELETE_ALL)
  return data
}

export const updateService = async (info: IService) => {
  const {data} = await $host.put<IRes>(Routs.SERVICE, info)
  return data
}
