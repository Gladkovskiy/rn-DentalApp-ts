import {Formik} from 'formik'
import React, {FC, useEffect, useState} from 'react'
import {Modal} from 'react-native'
import styled from 'styled-components/native'
import * as service from '../../formik/addAppointment'
import {useActionUpdate} from '../../hooks/useAction'
import {useAppSelector} from '../../hooks/useSelector'
import {useUpdateAppointment} from '../../http/query/appointment'
import PickDateandTime from '../PickDateandTime'
import PreviewAppointment from '../PreviewAppointment'
import SelectDent from '../SelectDent'
import {Container} from '../StyledComponents/Container'
import Button from '../UI/Button'
import SelectPatient from './SelectPatient'
import SelectService from './SelectService'

const UpdateApoinment: FC = () => {
  const {isVisibleApoinment, apointment} = useAppSelector(
    state => state.updateApi
  )
  const {resetVisibleApoinment} = useActionUpdate()
  const [patientFullname, setPatientFullname] = useState('')
  const [serviceType, setServiceType] = useState('')
  const updateAppoinment = useUpdateAppointment()

  useEffect(() => {
    setPatientFullname(apointment.patient.fullname)
    setServiceType(apointment.service.diagnos)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisibleApoinment])

  const initialValue: service.Appointment = {
    date: apointment.time.split(' ')[0],
    time: `${apointment.time.split(' ')[1]}:00`,
    dentNumber: apointment.dentNumber,
    patient: apointment.patient._id,
    service: apointment.service._id,
  }

  const submit = (values: service.Appointment) => {
    const date = values.date.split('.').reverse().join('-')
    const fullDate = Date.parse(`${date}T${values.time}.000`)

    console.log(values, fullDate)

    updateAppoinment
      .mutateAsync({
        _id: apointment._id,
        date: fullDate,
        dentNumber: values.dentNumber,
        patient: values.patient,
        service: values.service,
      })
      .then(() => {
        resetVisibleApoinment()
      })
  }

  const cancel = () => {
    resetVisibleApoinment()
  }

  const previewInfo = (
    values: service.Appointment,
    patient: string,
    service: string
  ): service.Appointment => ({
    ...values,
    patient,
    service,
  })

  return (
    <Modal animationType="slide" visible={isVisibleApoinment}>
      <Formik
        initialValues={initialValue}
        validationSchema={service.validationSchema}
        onSubmit={submit}
        validateOnChange
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          setFieldValue,
          setFieldTouched,
        }) => (
          <Container>
            <FlexGrow2>
              <PickDateandTime
                setFieldValue={setFieldValue}
                setFieldTouched={setFieldTouched}
              />
              <SelectDent
                dentNumber={values.dentNumber}
                setFieldValue={setFieldValue}
                setFieldTouched={setFieldTouched}
              />
              <SelectPatient
                setFieldValue={setFieldValue}
                setPatientFullname={setPatientFullname}
                setFieldTouched={setFieldTouched}
              />
              <SelectService
                setFieldValue={setFieldValue}
                setServiceType={setServiceType}
                setFieldTouched={setFieldTouched}
              />
              <FlexGrow1>
                <PreviewAppointment
                  values={previewInfo(values, patientFullname, serviceType)}
                  errors={errors}
                  touched={touched}
                />
              </FlexGrow1>
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

export default UpdateApoinment

const FlexGrow1 = styled.View`
  flex-grow: 1;
  justify-content: flex-end;
`
const FlexGrow2 = styled.View`
  flex-grow: 2;
`
