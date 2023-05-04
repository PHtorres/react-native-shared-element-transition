import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabBar} from '../components/TabBar';
import {AppStack} from './Stack';
import {ProfileScreen} from '../screens/ProfileScreen';
import {SettingsScreen} from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export const AppTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <TabBar props={props} />}>
        <Tab.Screen
          name="Home"
          component={AppStack}
          options={{headerShown: false}}
        />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
