import * as React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabBar} from '../components/TabBar';
import Animated, {SlideInLeft} from 'react-native-reanimated';

interface ScreenProps {
  title: string;
}

function Screen({title}: ScreenProps) {
  return (
    <Animated.View
      entering={SlideInLeft}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fffff4',
      }}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>{title}</Text>
    </Animated.View>
  );
}

function HomeScreen() {
  return <Screen title="Home" />;
}

function ProfileScreen() {
  return <Screen title="Profile" />;
}

function SettingsScreen() {
  return <Screen title="Settings" />;
}

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <TabBar props={props} />}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
