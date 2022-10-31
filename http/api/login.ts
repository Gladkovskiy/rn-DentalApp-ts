import {$authHost, $host, Routs} from '.'

export const login = async (info: {password: string}) => {
  const {
    data: {token},
  } = await $host.post<{token: string}>(Routs.LOGIN, info)
  return token
}

export const checkAuth = async () => {
  const {
    data: {token},
  } = await $authHost.get<{token: string}>(Routs.LOGIN)
  return token
}
