import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import {addPatient, searchPatient} from '../api/patient'

export const useAddPatient = () => {
  // const queryClient = useQueryClient()

  const mutate = useMutation(addPatient, {})
  return mutate
}

export const useSearchPatient = (fullname: string) => {
  const query = useQuery(['searchPatient', fullname], () =>
    searchPatient(fullname)
  )
  return query
}
