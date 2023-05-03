import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {House, GearSix} from 'phosphor-react-native';
import { TabBar } from '../components/TabBar';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
      }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      tabBar={(props) => <TabBar props={props}/>}
        // screenOptions={({route}) => ({
        // tabbar
        //   tabBarIcon: ({focused, color, size}) => {
        //     let iconName;

        //     if (route.name === 'Home') {
        //       // iconName = focused
        //       //   ? 'ios-information-circle'
        //       //   : 'ios-information-circle-outline';
        //       return <House />;
        //     } else if (route.name === 'Settings') {
        //       //iconName = focused ? 'ios-list' : 'ios-list-outline';
        //       return <GearSix />;
        //     }

        //     // You can return any component that you like here!
        //     //return <Ionicons name={iconName} size={size} color={color} />;
        //   },
        //   tabBarActiveTintColor: 'tomato',
        //   tabBarInactiveTintColor: 'gray',
        // })}
        >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
