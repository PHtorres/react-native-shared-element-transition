import {StyleSheet, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {ListItemDetailScreenNavigationProps} from '../routes/Navigation';

export const ListItemDetailScreen = ({
  route,
}: ListItemDetailScreenNavigationProps) => {
  return (
    <View style={styles.container}>
      <Animated.Image
        sharedTransitionTag={route.params.sharedTransitionTag + 'image'}
        source={{uri: route.params.item.imageUrl}}
        style={styles.image}
      />
      <Animated.View
        style={styles.titleContainer}
        sharedTransitionTag={
          route.params.sharedTransitionTag + 'title-container'
        }>
        <Animated.Text
          style={styles.title}
          sharedTransitionTag={route.params.sharedTransitionTag + 'title'}>
          {route.params.item.title}
        </Animated.Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    position: 'relative',
    bottom: 40,
    zIndex: 99,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
});
