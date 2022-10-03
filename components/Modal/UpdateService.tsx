import {Formik} from 'formik'
import React, {FC} from 'react'
import {Modal} from 'react-native'
import Button from '../UI/Button'
import * as services from '../../formik/addService'
import {Container, ViewMarginTop} from '../StyledComponents/Container'
import InputFormik from '../UI/InputFormik'
import styled from 'styled-components/native'
import {BlackText, Title} from '../StyledComponents/Text'
import {IService} from '../../types/user'
import {useAppSelector} from '../../hooks/useSelector'
import {useActionUpdate} from '../../hooks/useAction'
import {useUpdateService} from '../../http/query/service'

const UpdateService: FC = () => {
  const {isVisibleService, service} = useAppSelector(state => state.updateApi)
  const {resetVisibleService} = useActionUpdate()
  const {mutateAsync: updateService} = useUpdateService()

  const submit = (value: IService) =>
    updateService(value).then(() => resetVisibleService())
  const cancel = () => resetVisibleService()

  return (
    <Modal animationType="slide" visible={isVisibleService}>
      <Formik
        initialValues={service}
        validationSchema={services.validationSchema}
        onSubmit={submit}
      >
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
              <Button title="изменить" onPress={handleSubmit} />
              <Button title="отмена" onPress={cancel} />
            </FlexGrow1>
          </Container>
        )}
      </Formik>
    </Modal>
  )
}

export default UpdateService

const FlexGrow1 = styled.View`
  flex-grow: 1;
  justify-content: flex-end;
`
const FlexGrow2 = styled.View`
  flex-grow: 2;
`
