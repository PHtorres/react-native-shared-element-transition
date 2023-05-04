import {PropsWithChildren} from 'react';
import Animated, {SlideInLeft} from 'react-native-reanimated';

export interface ScreenProps extends PropsWithChildren {}
export const Screen = ({children}: ScreenProps) => {
  return (
    <Animated.View
      entering={SlideInLeft}
      style={{
        flex: 1,
        padding: 20,
        backgroundColor:'#fff'
      }}>
      {children}
    </Animated.View>
  );
};
