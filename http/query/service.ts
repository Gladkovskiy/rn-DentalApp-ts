import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import {
  addService,
  deleteAllServices,
  deleteService,
  searchService,
  updateService,
} from '../api/service'

export const useAddService = () => {
  const queryClient = useQueryClient()

  const mutate = useMutation(addService, {
    onSuccess: () => {
      queryClient.invalidateQueries(['searchService'])
    },
  })
  return mutate
}

export const useSearchService = (diagnos: string) => {
  const query = useQuery(['searchService', diagnos], () =>
    searchService(diagnos)
  )
  return query
}

export const useDeleteService = () => {
  const queryClient = useQueryClient()

  const mutate = useMutation(deleteService, {
    onSuccess: () => {
      queryClient.invalidateQueries(['searchService'])
      queryClient.invalidateQueries(['users'])
    },
  })
  return mutate
}

export const useDeleteAllServices = () => {
  const queryClient = useQueryClient()

  const mutate = useMutation(deleteAllServices, {
    onSuccess: () => {
      queryClient.invalidateQueries(['searchService'])
      queryClient.invalidateQueries(['users'])
    },
  })
  return mutate
}

export const useUpdateService = () => {
  const queryClient = useQueryClient()

  const mutate = useMutation(updateService, {
    onSuccess: () => {
      queryClient.invalidateQueries(['searchService'])
      queryClient.invalidateQueries(['users'])
    },
  })
  return mutate
}
