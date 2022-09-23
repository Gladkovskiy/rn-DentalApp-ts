import {useRoute} from '@react-navigation/native'
import React, {FC} from 'react'
import {View} from 'react-native'
import styled from 'styled-components/native'
import HistoryItem from '../components/HistoryItem'
import {GreyText} from '../components/StyledComponents/Text'
import Button from '../components/UI/Button'
import IconButton from '../components/UI/IconButton'
import {PacientScreenRouteProp} from '../types/navigation'

const PacientScreen: FC = () => {
  const {
    params: {patient},
  } = useRoute<PacientScreenRouteProp>()
  return (
    <Container>
      <View style={{padding: 20}}>
        <PacientFullName>{patient.fullname}</PacientFullName>
        <GreyText>{patient.phone}</GreyText>
        <ButtonContainer>
          <Button
            title="Формула зубов"
            bg="#2a86ff"
            onPress={() => console.log('press')}
          />
          <IconButton onPress={() => console.log('call')} />
        </ButtonContainer>
      </View>
      <StoreContainer>
        <HistoryItem />
      </StoreContainer>
    </Container>
  )
}

export default PacientScreen

const PacientFullName = styled.Text`
  font-weight: 800;
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 5px;
`
const Container = styled.View`
  flex: 1;
`
const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
`
const StoreContainer = styled.View`
  background-color: #dbdee0;
  flex: 1;
`
