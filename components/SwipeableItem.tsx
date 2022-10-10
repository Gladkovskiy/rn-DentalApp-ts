import React, {FC, forwardRef, PropsWithChildren} from 'react'
import Swipeable from 'react-native-gesture-handler/Swipeable'

interface ISwipeableItem {
  renderLeftAction: FC
  onOpen?: ((direction: 'left' | 'right') => void) | undefined
}

const SwipeableItem = forwardRef<Swipeable, PropsWithChildren<ISwipeableItem>>(
  ({children, renderLeftAction, onOpen = undefined}, ref) => {
    return (
      <Swipeable
        ref={ref}
        renderRightActions={renderLeftAction}
        onSwipeableOpen={onOpen}
      >
        {children}
      </Swipeable>
    )
  }
)

export default SwipeableItem
