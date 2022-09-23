import React, {FC, PropsWithChildren} from 'react'
import Swipeable from 'react-native-gesture-handler/Swipeable'

interface ISwipeableItem {
  renderLeftAction: FC
}

const SwipeableItem: FC<PropsWithChildren<ISwipeableItem>> = ({
  children,
  renderLeftAction,
}) => {
  return <Swipeable renderRightActions={renderLeftAction}>{children}</Swipeable>
}

export default SwipeableItem
