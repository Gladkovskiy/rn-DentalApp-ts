import * as yup from 'yup'
import * as FileSystem from 'expo-file-system'
//validation.js lib isMobilePhone regExp
const phoneRegExp = /^((\+?38|8)?0\d{9})|((\+?7|8)?9\d{9})$/

const fileInfo = async (uri: string) => {
  const info = await FileSystem.getInfoAsync(uri)
  return info
}

export const validationSchema = yup.object({
  firstname: yup.string().required('Обязательное поле'),
  lastname: yup.string().required('Обязательное поле'),
  surname: yup.string().required('Обязательное поле'),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Неправильно введён номер телефона')
    .required('Обязательное поле'),
  img: yup
    .mixed()
    .required('Выберите файл')
    .test('fileType', 'Не поддержуется тип файла', value => {
      const SUPPORTED_FORMATS = ['jpg', 'jpeg', 'png', 'webp']

      if (value) {
        const arr: string[] = value.uri.split('.')
        const len = arr.length

        return value && SUPPORTED_FORMATS.includes(arr[len - 1])
      }
      return true
    })
    .test('fileSize', 'Размер файла должен быть < 1Mb', async value => {
      if (value) {
        const info = await fileInfo(value.uri)

        if (info.size) return value && info.size <= 1000000
      }
      return true
    }),
})

type Patient = yup.InferType<typeof validationSchema>

export const initialValue: Patient = {
  firstname: '',
  lastname: '',
  surname: '',
  phone: '',
  img: null,
}
