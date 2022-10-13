import React, {FC, useRef} from 'react'
import {Picker} from '@react-native-picker/picker'
import {SetFieldTouched, SetFieldValue} from '../types/formik'
import Button from './UI/Button'

interface ISelectDent {
  setFieldValue: SetFieldValue
  setFieldTouched: SetFieldTouched
  dentNumber: number
}

const SelectDent: FC<ISelectDent> = ({
  setFieldValue,
  dentNumber,
  setFieldTouched,
}) => {
  const dents = Array(32).fill('')
  const pickerRef = useRef<Picker<number>>(null)

  return (
    <>
      <Button onPress={() => pickerRef.current?.focus()} title="номер зуба" />
      <Picker
        style={{position: 'absolute'}}
        ref={pickerRef}
        selectedValue={dentNumber}
        onValueChange={(itemValue, itemIndex) => {
          setFieldTouched('dentNumber', true)
          setFieldValue('dentNumber', itemValue)
        }}
      >
        {dents.map((_, index) => (
          <Picker.Item label={`${index + 1}`} value={index + 1} key={index} />
        ))}
      </Picker>
    </>
  )
}

export default SelectDent
