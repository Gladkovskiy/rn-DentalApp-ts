import {$host} from '.'
import {IDateInfo} from '../../types/user'

/* export const getAppointment = async () => {
  try {
    const {data: users} = await $host.get<IGetUser[]>(`/user`)

    const {data: servicePrice} = await $host.get<IServicePrice[]>(
      '/servicePrice'
    )
    const {data: appointment} = await $host.get<IAppointment[]>('/appointment')

    const title = appointment
      .reduce<string[]>((result, item) => {
        const date = new Date(item.date).toLocaleDateString()
        const findDate = result.find(item => item === date)
        if (findDate) return result
        return [...result, date]
      }, [])
      .sort()

    const fullData: IUserInfoWithDate[] = appointment.map(item => {
      const user =
        users.find(user => user.id === item.user_id) || ({} as IGetUser)
      const {diagnos, price} =
        servicePrice.find(service => service.id === item.diagnos_id) ||
        ({} as IServicePrice)
      return {
        diagnos,
        price,
        user,
        time: item.time,
        active: item.isActive,
        date: new Date(item.date).toLocaleDateString(),
      }
    })

    const info: IDateInfo[] = title.map(title => ({
      title,
      data: fullData
        .reduce<IUserInfo[]>((result, item) => {
          if (item.date === title) return [...result, {...item}]
          return result
        }, [])
        .sort(byField<IUserInfo>('time')),
    }))
    //первый элемент активный
    info[0].data[0].active = true
    return info
  } catch (error) {
    console.log(error)
  }
} */

export const getAppointment = async () => {
  try {
    const {data} = await $host.get<IDateInfo[]>('/appoinment')
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}
