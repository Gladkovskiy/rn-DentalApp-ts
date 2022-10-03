import React, {FC, forwardRef, PropsWithChildren} from 'react'
import Swipeable from 'react-native-gesture-handler/Swipeable'

interface ISwipeableItem {
  renderLeftAction: FC
}

const SwipeableItem = forwardRef<Swipeable, PropsWithChildren<ISwipeableItem>>(
  ({children, renderLeftAction}, ref) => {
    return (
      <Swipeable ref={ref} renderRightActions={renderLeftAction}>
        {children}
      </Swipeable>
    )
  }
)

export default SwipeableItem
