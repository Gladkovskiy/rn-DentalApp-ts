import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import {
  addAppointment,
  deleteAppointment,
  getAppointment,
  updateAppointment,
} from '../api/appointment'

export const useGetAppointment = () => {
  const query = useQuery(['appoinment'], getAppointment, {})
  return query
}

export const useAddAppointment = () => {
  const client = useQueryClient()
  const mutate = useMutation(addAppointment, {
    onSuccess: () => {
      client.invalidateQueries(['appoinment'])
    },
  })
  return mutate
}

export const useDeleteAppointment = () => {
  const client = useQueryClient()
  const mutate = useMutation(deleteAppointment, {
    onSuccess: () => {
      client.invalidateQueries(['appoinment'])
    },
  })
  return mutate
}

export const useUpdateAppointment = () => {
  const client = useQueryClient()
  const mutate = useMutation(updateAppointment, {
    onSuccess: () => {
      client.invalidateQueries(['appoinment'])
    },
  })
  return mutate
}
