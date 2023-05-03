import {SafeAreaView, View} from 'react-native';
import {Tabs} from './src/routes/Tabs';
export const App = () => {
  return (
    <View style={{flex: 1}}>
      <Tabs />
    </View>
  );
};
