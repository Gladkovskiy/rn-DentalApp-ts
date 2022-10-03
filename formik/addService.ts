import * as yup from 'yup'

export const validationSchema = yup.object({
  diagnos: yup.string().required('Обязательное поле'),
  price: yup.string().required('Обязательное поле'),
})

export type Service = yup.InferType<typeof validationSchema>

export const initialValues: Service = {
  diagnos: '',
  price: '',
}
