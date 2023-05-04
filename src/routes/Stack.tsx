import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackParamList} from './Navigation';
import {ListScreen} from '../screens/ListScreen';
import {ListItemDetailScreen} from '../screens/ListItemDetailScreen';
import {ROUTES_NAMES} from './utils';

const Stack = createNativeStackNavigator<StackParamList>();

export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={props => ({
        title: ROUTES_NAMES[props.route.name],
      })}>
      <Stack.Screen name="ListScreen" component={ListScreen} />
      <Stack.Screen
        name="ListItemDetailScreen"
        component={ListItemDetailScreen}
      />
    </Stack.Navigator>
  );
};
