import {$host} from '.'
import {IRes} from '../../types/api'
import {IService} from '../../types/user'

export const addService = async (data: IService) => {
  const {
    data: {res},
  } = await $host.post<{res: string}>('/service', data)
  return res
}

export const searchService = async (diagnos: string) => {
  const {data} = await $host.get<IService[]>('/service/search', {
    params: {diagnos},
  })
  return data
}

export const deleteService = async (info: {_id: string}) => {
  const {data} = await $host.delete<IRes>('/service', {
    params: info,
  })
  return data
}

export const deleteAllServices = async () => {
  const {data} = await $host.delete<IRes>('/service/all')
  return data
}

export const updateService = async (info: IService) => {
  const {data} = await $host.put<IRes>('/service', info)
  return data
}
