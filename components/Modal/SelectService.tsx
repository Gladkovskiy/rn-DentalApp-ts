import React, {FC, useState} from 'react'
import {Modal} from 'react-native'
import styled from 'styled-components/native'
import {useSearchService} from '../../http/query/service'
import {SetFieldTouched, SetFieldValue} from '../../types/formik'
import {IService} from '../../types/user'
import ServiceItem from '../ServiceItem'
import {Container} from '../StyledComponents/Container'
import Button from '../UI/Button'
import SearchInput from '../UI/SearchInput'

interface ISelectService {
  setFieldValue: SetFieldValue
  setServiceType: React.Dispatch<React.SetStateAction<string>>
  setFieldTouched: SetFieldTouched
}

const SelectService: FC<ISelectService> = ({
  setFieldValue,
  setServiceType,
  setFieldTouched,
}) => {
  const [search, setSearch] = useState<string>('')
  const [isVisible, setVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [activeService, setActiveService] = useState<IService>()
  const services = useSearchService(search)

  const searchService = (text: string) => setSearch(text)

  const select = (index: number, service: IService) => {
    setActiveIndex(index)
    setActiveService(service)
  }

  const confirm = () => {
    if (activeService) {
      setFieldTouched('service', true)
      setFieldValue('service', activeService._id)
      setServiceType(activeService.diagnos)
    }
    setVisible(state => !state)
  }

  return (
    <>
      <Button title="Услуга" onPress={() => setVisible(true)} />
      <Modal animationType="slide" visible={isVisible}>
        <Container>
          <SearchInput
            placeholder="Введите название услуги"
            value={search}
            onChangeText={searchService}
            label={''}
          />

          {services.isSuccess &&
            services.data.map((item, index) => (
              <ServiceItem
                key={item._id}
                {...item}
                active={activeIndex === index + 1}
                onPress={() => select(index + 1, item)}
              />
            ))}

          <FlexGrow1>
            <Button
              title="выбрать"
              onPress={confirm}
              disabled={!!!activeIndex}
            />
            <Button
              title="отмена"
              onPress={() => setVisible(state => !state)}
            />
          </FlexGrow1>
        </Container>
      </Modal>
    </>
  )
}

export default SelectService

const FlexGrow1 = styled.View`
  flex-grow: 1;
  justify-content: flex-end;
`
