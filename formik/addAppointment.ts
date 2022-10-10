import * as yup from 'yup'

export const validationSchema = yup.object({
  dentNumber: yup.number().required('Обязательное поле'),
  date: yup.string().required('Обязательное поле'),
  time: yup.string().required('Обязательное поле'),
  service: yup.string().required('Обязательное поле'),
  patient: yup.string().required('Обязательное поле'),
})

export type Appointment = yup.InferType<typeof validationSchema>

export const initialValues: Appointment = {
  dentNumber: 0,
  date: '',
  time: '',
  service: '',
  patient: '',
}
