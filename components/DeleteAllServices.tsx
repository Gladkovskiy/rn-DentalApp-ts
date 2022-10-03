import React, {FC} from 'react'
import Button from './UI/Button'
import {Alert} from 'react-native'
import {useDeleteAllServices} from '../http/query/service'

const DeleteAllServices: FC = () => {
  const removeAll = useDeleteAllServices()

  const deleteAllServices = () =>
    Alert.alert(
      'Удаление всех услуг',
      'Осторожно удаление будет безвозвратно!!!',
      [
        {text: 'Подтвердить', onPress: () => removeAll.mutate()},
        {text: 'Отмена', onPress: () => console.log('cancel'), style: 'cancel'},
      ]
    )

  return (
    <Button title="Удалить все услуги" onPress={deleteAllServices}></Button>
  )
}

export default DeleteAllServices
