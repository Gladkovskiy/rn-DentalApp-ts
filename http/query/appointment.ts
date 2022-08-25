import {useQuery} from '@tanstack/react-query'
import {getAppointment} from '../api/appointment'

export const useGetAppointment = () => {
  const query = useQuery(['users'], getAppointment, {})
  return query
}
