import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import {
  addPatient,
  deleteAllPatients,
  deletePatient,
  searchPatient,
  updatePatient,
} from '../api/patient'

export const useAddPatient = () => {
  const queryClient = useQueryClient()

  const mutate = useMutation(addPatient, {
    onSuccess: () => {
      queryClient.invalidateQueries(['searchPatient'])
    },
  })
  return mutate
}

export const useSearchPatient = (fullname: string) => {
  const query = useQuery(['searchPatient', fullname], () =>
    searchPatient(fullname)
  )
  return query
}

export const useDeletePatient = () => {
  const queryClient = useQueryClient()

  const mutate = useMutation(deletePatient, {
    onSuccess: () => {
      queryClient.invalidateQueries(['searchPatient'])
      queryClient.invalidateQueries(['appoinment'])
    },
  })
  return mutate
}

export const useDeleteAllPatients = () => {
  const queryClient = useQueryClient()

  const mutate = useMutation(deleteAllPatients, {
    onSuccess: () => {
      queryClient.invalidateQueries(['searchPatient'])
      queryClient.invalidateQueries(['appoinment'])
    },
  })
  return mutate
}

export const useUpdatePatient = () => {
  const queryClient = useQueryClient()

  const mutate = useMutation(updatePatient, {
    onSuccess: () => {
      queryClient.invalidateQueries(['searchPatient'])
      queryClient.invalidateQueries(['appoinment'])
    },
  })
  return mutate
}
