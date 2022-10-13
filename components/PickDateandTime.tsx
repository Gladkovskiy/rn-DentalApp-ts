import DateTimePicker from '@react-native-community/datetimepicker'
import React, {FC, useState} from 'react'
import Button from './UI/Button'
import {SetFieldTouched, SetFieldValue} from '../types/formik'

interface IPickDateandTime {
  setFieldValue: SetFieldValue
  setFieldTouched: SetFieldTouched
}

const PickDateandTime: FC<IPickDateandTime> = ({
  setFieldValue,
  setFieldTouched,
}) => {
  const [isVisibleDate, setVisibleDate] = useState(false)
  const [isVisibleTime, setVisibleTime] = useState(false)

  return (
    <>
      <Button title="дата" onPress={() => setVisibleDate(true)} />
      <Button title="время" onPress={() => setVisibleTime(true)} />

      {isVisibleDate && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          minimumDate={new Date()}
          onChange={(event, date) => {
            setVisibleDate(false)
            if (event.type === 'set') {
              setFieldTouched('date', true)
              setFieldValue('date', date?.toLocaleDateString())
            }
          }}
        />
      )}

      {isVisibleTime && (
        <DateTimePicker
          value={new Date()}
          mode="time"
          minimumDate={new Date()}
          is24Hour={true}
          minuteInterval={5}
          onChange={(event, date) => {
            setVisibleTime(false)
            let time
            if (event.type === 'set' && date !== undefined) {
              let temp = date.toLocaleTimeString().split(':')
              temp[2] = '00'
              time = temp.join(':')
            }
            setFieldTouched('time', true)
            setFieldValue('time', time)
          }}
        />
      )}
    </>
  )
}

export default PickDateandTime
