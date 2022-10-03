import {Formik} from 'formik'
import React, {FC, useState} from 'react'
import {Modal} from 'react-native'
import Button from '../UI/Button'
import * as service from '../../formik/addService'
import {Container, ViewMarginTop} from '../StyledComponents/Container'
import InputFormik from '../UI/InputFormik'
import styled from 'styled-components/native'
import {BlackText, Title} from '../StyledComponents/Text'
import {useAddService} from '../../http/query/service'

const AddService: FC = () => {
  const [isVisible, setVisible] = useState(false)
  const addService = useAddService()

  const submit = ({diagnos, price}: service.Service) => {
    if (typeof diagnos === 'string' && typeof price === 'string')
      addService
        .mutateAsync({diagnos, price, _id: ''})
        .then(() => setVisible(false))
  }
  return (
    <>
      <Button
        title="Добавить услугу"
        onPress={() => setVisible(state => !state)}
      />
      <Modal animationType="slide" visible={isVisible}>
        <Formik {...service} onSubmit={submit}>
          {({values, errors, handleChange, handleSubmit, handleBlur}) => (
            <Container>
              <FlexGrow2>
                <Title>Введите данные услуги</Title>
                <ViewMarginTop>
                  <BlackText>Название услуги</BlackText>
                  <InputFormik
                    placeholder="услуга"
                    onChangeText={handleChange('diagnos')}
                    onBlur={handleBlur('diagnos')}
                    value={values.diagnos}
                    error={errors.diagnos}
                  />
                </ViewMarginTop>

                <ViewMarginTop>
                  <BlackText>Стоимость услуги</BlackText>
                  <InputFormik
                    placeholder="стоимость"
                    onChangeText={handleChange('price')}
                    onBlur={handleBlur('price')}
                    value={values.price}
                    error={errors.price}
                  />
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

export default AddService

const FlexGrow1 = styled.View`
  flex-grow: 1;
  justify-content: flex-end;
`
const FlexGrow2 = styled.View`
  flex-grow: 2;
`
