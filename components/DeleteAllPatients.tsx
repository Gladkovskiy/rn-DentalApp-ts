import React, {FC} from 'react'
import Button from './UI/Button'
import {Alert} from 'react-native'

const DeleteAllPatients: FC = () => {
  const deleteAllPatients = () =>
    Alert.alert(
      'Удаление данных пациетов',
      'Осторожно удаление будет безвозвратно!!!',
      [
        {text: 'Подтвердить', onPress: () => console.log('delete')},
        {text: 'Отмена', onPress: () => console.log('cancel'), style: 'cancel'},
      ]
    )

  return (
    <Button title="Удалить всех пациентов" onPress={deleteAllPatients}></Button>
  )
}

export default DeleteAllPatients
