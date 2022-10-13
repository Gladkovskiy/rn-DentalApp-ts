import {MaterialIcons} from '@expo/vector-icons'
import {FormikErrors, FormikTouched} from 'formik'
import React, {FC} from 'react'
import styled from 'styled-components/native'
import {Appointment} from '../formik/addAppointment'

interface IPreviewAppoinment {
  values: Appointment
  errors: FormikErrors<Appointment>
  touched: FormikTouched<Appointment>
}

const PreviewAppointment: FC<IPreviewAppoinment> = ({
  values,
  errors,
  touched,
}) => {
  const info = {...values}
  const error = {...errors}
  const touch = {...touched}
  const name: string[] = ['Дата', 'Время', 'Номер зуба', 'Пациент', 'Услуга']
  console.log(touch)
  return (
    <>
      {Object.keys(info).map((item, index) => {
        const valueFormik = info[item as keyof typeof info]
        const errorValid = !!error[item as keyof typeof error]
        const touchValid = !!touch[item as keyof typeof touch]
        return (
          <PreviewView
            error={errorValid && touchValid}
            done={!errorValid && touchValid}
            key={item}
          >
            <PreviewText>
              {name[index]}: {valueFormik}
            </PreviewText>
            <ViewAbsolute visible={errorValid && touchValid}>
              <MaterialIcons name="cancel" size={24} color="red" />
            </ViewAbsolute>
            <ViewAbsolute visible={!errorValid && touchValid}>
              <MaterialIcons name="done" size={24} color="green" />
            </ViewAbsolute>
          </PreviewView>
        )
      })}
    </>
  )
}

export default PreviewAppointment

interface IPreviewView {
  error: boolean
  done: boolean
}

const PreviewView = styled.View<IPreviewView>`
  border: ${({error, done}) =>
    error ? '2px solid red' : done ? '2px solid green' : 'none'};
  border-radius: 20px;
  padding: 10px;
  margin: 5px 0;
`

const PreviewText = styled.Text`
  font-size: 18px;
`

interface IViewAbsolute {
  visible: boolean
}

const ViewAbsolute = styled.View<IViewAbsolute>`
  position: absolute;
  top: 50%;
  left: 95%;
  display: ${({visible}) => (visible ? 'flex' : 'none')};
`
