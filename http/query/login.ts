import {useMutation, useQuery} from '@tanstack/react-query'
import {useActionAuth} from '../../hooks/useAction'
import {login, checkAuth} from '../api/login'
import jwt_decode from 'jwt-decode'
import {IUserInfo} from '../../store/reducers/asyncStorageReducer'

export const useLogin = () => {
  const {setToken, setUserInfo, auth} = useActionAuth()
  const mutate = useMutation(login, {
    onSuccess: data => {
      setToken(data)
      const decode: IUserInfo = jwt_decode(data)
      const {_id, login, role} = decode
      setUserInfo({_id, login, role})
      auth(true)
    },
    onError: () => {
      setToken('')
      setUserInfo({_id: '', login: '', role: ''})
      auth(false)
    },
  })
  return mutate
}

export const useCheckAuth = () => {
  const {setToken, setUserInfo, auth} = useActionAuth()
  const query = useQuery(['checkAuth'], checkAuth, {
    onSuccess: data => {
      setToken(data)
      const decode: IUserInfo = jwt_decode(data)
      setUserInfo(decode)
      auth(true)
    },
    onError: () => {
      setToken('')
      setUserInfo({_id: '', login: '', role: ''})
      auth(false)
    },
  })
  return query
}
