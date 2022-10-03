import {FC} from 'react'
import styled from 'styled-components/native'
import {MaterialIcons} from '@expo/vector-icons'
import {Entypo} from '@expo/vector-icons'

interface ISwipeableSettings {
  remove?: () => void
  update?: () => void
}

const zat = () => console.log('delete/update')

const SwipeableSettings: FC<ISwipeableSettings> = ({
  update = zat,
  remove = zat,
}) => {
  return (
    <Flex>
      <IconButton onPress={remove}>
        <MaterialIcons name="delete-forever" size={24} color="black" />
      </IconButton>
      <IconButton onPress={update}>
        <Entypo name="pencil" size={24} color="black" />
      </IconButton>
    </Flex>
  )
}

export default SwipeableSettings

const IconButton = styled.TouchableOpacity`
  width: 45px;
  height: 45px;
  border: 1px solid #ccc2c2;
  background-color: #eaeff1;
  border-radius: 10px;
  margin: 0 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Flex = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 2px;
`
