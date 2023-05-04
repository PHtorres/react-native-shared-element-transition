import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {GearSix, House, User, IconProps} from 'phosphor-react-native';
import {useEffect} from 'react';
import {StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import Animated, {
  FadeInUp,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const SCREEN_SIZE = Dimensions.get('screen').width;
const HORIZONTAL_PADDING = 20;
const NUMBER_OF_NAV_ITEMS = 3;

const TAB_BAR_CONSTANTS = {
  navItemWidth: (SCREEN_SIZE - HORIZONTAL_PADDING * 2) / NUMBER_OF_NAV_ITEMS,
  indicatorWidth: SCREEN_SIZE / NUMBER_OF_NAV_ITEMS,
  indicatorHeight: 4,
  activeColor: '#FF22DD',
  inactiveColor: '#999',
};

interface TabBarProps {
  props: BottomTabBarProps;
}
export const TabBar = ({props}: TabBarProps) => {
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(
            props.state.index * TAB_BAR_CONSTANTS.indicatorWidth,
            {velocity: 1000},
          ),
        },
      ],
    };
  });
  return (
    <Animated.View style={styles.container}>
      <Animated.View style={[styles.indicator, animatedStyles]}></Animated.View>
      <Animated.View style={styles.tabItems}>
        <TabItem
          isSelected={props.state.index === 0}
          Icon={House}
          onPress={() => props.navigation.navigate('Home')}
          title="Home"
        />
        <TabItem
          isSelected={props.state.index === 1}
          Icon={User}
          onPress={() => props.navigation.navigate('Profile')}
          title="Profile"
        />
        <TabItem
          isSelected={props.state.index === 2}
          Icon={GearSix}
          onPress={() => props.navigation.navigate('Settings')}
          title="Settings"
        />
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
  },
  indicator: {
    height: TAB_BAR_CONSTANTS.indicatorHeight,
    width: TAB_BAR_CONSTANTS.indicatorWidth,
    backgroundColor: TAB_BAR_CONSTANTS.activeColor,
    top: -TAB_BAR_CONSTANTS.indicatorHeight,
  },
  tabItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: HORIZONTAL_PADDING,
  },
  tabItem: {
    width: TAB_BAR_CONSTANTS.navItemWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabItemText: {
    fontSize: 16,
    color: TAB_BAR_CONSTANTS.activeColor,
    position: 'absolute',
  },
});

interface TabItemProps {
  isSelected: boolean;
  Icon: (props: IconProps) => JSX.Element;
  onPress: () => void;
  title: string;
}

const TabItem = ({isSelected, Icon, onPress, title}: TabItemProps) => {
  const {color, iconScaleAnimatedStyle, titleScaleAnimatedStyle} =
    useAnimatedTabItem(isSelected);
  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View entering={FadeInUp.duration(500)} style={styles.tabItem}>
        <Animated.View style={iconScaleAnimatedStyle}>
          <Icon color={color} size={32} />
        </Animated.View>
        <Animated.Text style={[styles.tabItemText, titleScaleAnimatedStyle]}>
          {title}
        </Animated.Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const useAnimatedTabItem = (isSelected: boolean) => {
  const color = isSelected
    ? TAB_BAR_CONSTANTS.activeColor
    : TAB_BAR_CONSTANTS.inactiveColor;
  const titleScale = useSharedValue(0);
  const iconScale = useSharedValue(1);
  useEffect(() => {
    if (isSelected) {
      titleScale.value = 1;
      iconScale.value = 0;
    } else {
      titleScale.value = 0;
      iconScale.value = 1;
    }
  }, [isSelected]);

  const iconScaleAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withSpring(iconScale.value),
        },
      ],
    };
  });

  const titleScaleAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withSpring(titleScale.value),
        },
      ],
    };
  });

  return {
    color,
    iconScaleAnimatedStyle,
    titleScaleAnimatedStyle,
  };
};
