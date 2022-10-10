import React, {FC, useRef} from 'react'
import {Picker} from '@react-native-picker/picker'
import {SetFieldValue} from '../types/formik'
import Button from './UI/Button'

interface ISelectDent {
  setFieldValue: SetFieldValue
  dentNumber: number
}

const SelectDent: FC<ISelectDent> = ({setFieldValue, dentNumber}) => {
  const dents = Array(32).fill('')
  const pickerRef = useRef<Picker<number>>(null)

  return (
    <>
      <Button onPress={() => pickerRef.current?.focus()} title="номер зуба" />
      <Picker
        style={{position: 'absolute'}}
        ref={pickerRef}
        selectedValue={dentNumber}
        onValueChange={(itemValue, itemIndex) =>
          setFieldValue('dentNumber', itemValue)
        }
      >
        {dents.map((_, index) => (
          <Picker.Item label={`${index + 1}`} value={index + 1} key={index} />
        ))}
      </Picker>
    </>
  )
}

export default SelectDent
