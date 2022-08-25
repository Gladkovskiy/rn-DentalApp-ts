import React, {FC} from 'react'
import styled from 'styled-components/native'
import {MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons'
import {View, StyleSheet} from 'react-native'
import {Feather} from '@expo/vector-icons'

const HistoryItem: FC = () => {
  return (
    <View style={styles.container}>
      <MoreButton>
        <Feather name="more-vertical" size={24} color="rgba(0, 0, 0, 0.5)" />
      </MoreButton>
      <Flex>
        <MaterialCommunityIcons name="tooth" size={20} color="gray" />
        <Text>
          Зуб:<BoldText> 12</BoldText>
        </Text>
      </Flex>
      <Flex>
        <MaterialIcons name="list-alt" size={20} color="gray" />
        <Text>
          Диагноз:<BoldText> пульпит</BoldText>
        </Text>
      </Flex>
      <FlexBeetween>
        <TextDate>11.10.2019 15:40</TextDate>
        <TextPrice>1200грн</TextPrice>
      </FlexBeetween>
    </View>
  )
}

export default HistoryItem

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 1,
    margin: 15,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
})

const Text = styled.Text`
  margin-left: 5px;
  font-size: 18px;
`
const BoldText = styled(Text)`
  font-weight: 800;
`
const Flex = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
`
const TextDate = styled(BoldText)`
  padding: 8px;
  background-color: #2a86ff;
  color: white;
  text-align: center;
  border-radius: 15px;
`
const TextPrice = styled(TextDate)`
  background-color: #eaeff1;
  color: #2a86ff;
`
const FlexBeetween = styled(Flex)`
  justify-content: space-between;
`

const MoreButton = styled.TouchableOpacity`
  position: absolute;
  top: 25px;
  right: 15px;
`
