import * as ImagePiker from 'expo-image-picker'
import {Formik} from 'formik'
import React, {FC} from 'react'
import {Modal} from 'react-native'
import styled from 'styled-components/native'
import {Patient} from '../../formik/addPatient'
import {validationSchema} from '../../formik/updatePatient'
import {useActionUpdate} from '../../hooks/useAction'
import {useAppSelector} from '../../hooks/useSelector'
import {useUpdatePatient} from '../../http/query/patient'
import {SetFieldValue} from '../../types/formik'
import {Container, ViewMarginTop} from '../StyledComponents/Container'
import {BlackText, ErrorText, Title} from '../StyledComponents/Text'
import Button from '../UI/Button'
import InputFormik from '../UI/InputFormik'

const UpdatePatient: FC = () => {
  const {
    isVisiblePatient,
    patient: {_id, fullname, phone},
  } = useAppSelector(state => state.updateApi)
  const {resetVisiblePatient} = useActionUpdate()
  const {mutateAsync: update} = useUpdatePatient()

  const initialValue: Patient = {
    surname: fullname.split(' ')[0],
    firstname: fullname.split(' ')[1],
    lastname: fullname.split(' ')[2],
    phone,
    img: null,
  }

  const pickAvatar = async (setFieldValue: SetFieldValue) => {
    try {
      const image = await ImagePiker.launchImageLibraryAsync({
        mediaTypes: ImagePiker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      })
      if (!image.cancelled) {
        setFieldValue('img', image)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const submit = ({firstname, img, lastname, phone, surname}: Patient) => {
    const data = new FormData()
    data.append('_id', _id)
    data.append('fullname', `${surname} ${firstname} ${lastname}`)
    data.append('phone', phone)
    if (img) {
      data.append(
        'avatar',
        JSON.parse(
          JSON.stringify({
            uri: img.uri,
            type: `image/${img.uri.split('.').pop()}
            `,
            name: 'name',
          })
        )
      )
    }

    update(data).then(() => resetVisiblePatient())
  }

  return (
    <Modal animationType="slide" visible={isVisiblePatient}>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={submit}
      >
        {({
          values,
          errors,
          handleChange,
          handleSubmit,
          handleBlur,
          setFieldValue,
        }) => (
          <Container>
            <FlexGrow2>
              <Title>Введите данные пациента</Title>
              <ViewMarginTop>
                <BlackText>ФИО пациента</BlackText>

                <InputFormik
                  placeholder="фамилия"
                  onChangeText={handleChange('surname')}
                  onBlur={handleBlur('surname')}
                  value={values.surname}
                  error={errors.surname}
                />

                <InputFormik
                  placeholder="имя"
                  onChangeText={handleChange('firstname')}
                  onBlur={handleBlur('firstname')}
                  value={values.firstname}
                  error={errors.firstname}
                />

                <InputFormik
                  placeholder="отчество"
                  onChangeText={handleChange('lastname')}
                  onBlur={handleBlur('lastname')}
                  value={values.lastname}
                  error={errors.lastname}
                />
              </ViewMarginTop>

              <ViewMarginTop>
                <BlackText>Номер телефона</BlackText>
                <InputFormik
                  placeholder="номер телефона"
                  keyboardType="phone-pad"
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  value={values.phone}
                  error={errors.phone}
                />
              </ViewMarginTop>

              <ViewMarginTop>
                <Button
                  title="выберите аватарку"
                  onPress={() => pickAvatar(setFieldValue)}
                />
                {errors.img && <ErrorText>{errors.img}</ErrorText>}
              </ViewMarginTop>
            </FlexGrow2>

            <FlexGrow1>
              <Button title="изменить" onPress={handleSubmit} />
              <Button title="отмена" onPress={() => resetVisiblePatient()} />
            </FlexGrow1>
          </Container>
        )}
      </Formik>
    </Modal>
  )
}

export default UpdatePatient

const FlexGrow1 = styled.View`
  flex-grow: 1;
  justify-content: flex-end;
`
const FlexGrow2 = styled.View`
  flex-grow: 2;
`
