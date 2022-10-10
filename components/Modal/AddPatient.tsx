import * as ImagePiker from 'expo-image-picker'
import {Formik} from 'formik'
import React, {FC, useState} from 'react'
import {Modal} from 'react-native'
import styled from 'styled-components/native'
import {initialValue, validationSchema} from '../../formik/addPatient'
import {Container, ViewMarginTop} from '../StyledComponents/Container'
import {BlackText, ErrorText, Title} from '../StyledComponents/Text'
import Button from '../UI/Button'
import InputFormik from '../UI/InputFormik'
import {SetFieldValue} from '../../types/formik'
import {useAddPatient} from '../../http/query/patient'

const AddPatient: FC = () => {
  const [isVisible, setVisible] = useState(false)
  const addPatient = useAddPatient()

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

  return (
    <>
      <Button
        title="Добавить пациента"
        onPress={() => setVisible(state => !state)}
      />
      <Modal animationType="slide" visible={isVisible}>
        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={({firstname, lastname, surname, phone, img}) => {
            const data = new FormData()
            data.append('fullname', `${surname} ${firstname} ${lastname}`)
            data.append('phone', phone)

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

            addPatient
              .mutateAsync(data)
              .then(() => setVisible(state => !state))
              .catch(error => console.log(error))
          }}
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
                <Button title="добавить" onPress={handleSubmit} />
                <Button
                  title="отмена"
                  onPress={() => setVisible(state => !state)}
                />
              </FlexGrow1>
            </Container>
          )}
        </Formik>
      </Modal>
    </>
  )
}

export default AddPatient

const FlexGrow1 = styled.View`
  flex-grow: 1;
  justify-content: flex-end;
`
const FlexGrow2 = styled.View`
  flex-grow: 2;
`
