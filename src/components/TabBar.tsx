import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {GearSix, House} from 'phosphor-react-native';
import {Text, TouchableOpacity, View} from 'react-native';
import Animated, {SlideOutDown} from 'react-native-reanimated';

interface TabBarProps {
  props: BottomTabBarProps;
}
export const TabBar = ({props}: TabBarProps) => {
  return (
    <View>
    <TouchableOpacity
      style={{height: 100, alignItems:'center', justifyContent:'center'}}
      onPress={() => props.navigation.navigate('Settings')}>
        {props.state.index === 0 ? <SelectedHomeIcon/> : <SelectedSettingsIcon/>}
    </TouchableOpacity>
    </View>
  );
};

const SelectedHomeIcon = () => {
  return (
    <Animated.View entering={SlideOutDown}>
      <House />
    </Animated.View>
  );
};

const SelectedSettingsIcon = () => {
    return (
      <Animated.View entering={SlideOutDown} style={{width:50, height: 50}}>
        <GearSix />
      </Animated.View>
    );
  };
