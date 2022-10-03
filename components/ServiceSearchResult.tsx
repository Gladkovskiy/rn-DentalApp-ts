import React, {FC, useRef} from 'react'
import styled from 'styled-components/native'
import ServiceItem from '../components/ServiceItem'
import {Title} from '../components/StyledComponents/Text'
import SwipeableItem from '../components/SwipeableItem'
import SwipeableSettings from '../components/SwipeableSettings'
import {useActionUpdate} from '../hooks/useAction'
import {useDeleteService, useSearchService} from '../http/query/service'
import {IService} from '../types/user'
import {Swipeable} from 'react-native-gesture-handler'

interface IServiceSearchResult {
  search: string
}

const ServiceSearchResult: FC<IServiceSearchResult> = ({search}) => {
  const services = useSearchService(search)
  const remove = useDeleteService()
  const {setService, setVisibleService} = useActionUpdate()
  const refArr = useRef<Swipeable[]>([])

  const closeAllSwipeable = () =>
    setTimeout(() => {
      refArr.current.forEach(item => item.close())
    }, 100)

  const update = (data: IService) => {
    setService(data)
    setVisibleService()
    closeAllSwipeable()
  }

  const renderLeftAction = (item: IService) => (
    <SwipeableSettings
      remove={() => remove.mutate({_id: item._id})}
      update={() => update(item)}
    />
  )
  return (
    <ScrollContainer>
      {!services.isSuccess ? (
        <Title>Ошибка сервера</Title>
      ) : services.data.length === 0 ? (
        <Title>Ничего не найдено</Title>
      ) : (
        services.data.map(item => (
          <SwipeableItem
            ref={ref => {
              if (ref) refArr.current.push(ref)
            }}
            key={item._id}
            renderLeftAction={() => renderLeftAction(item)}
          >
            <ServiceItem {...item} />
          </SwipeableItem>
        ))
      )}
    </ScrollContainer>
  )
}

export default ServiceSearchResult

const ScrollContainer = styled.ScrollView`
  margin-bottom: 200px;
`
