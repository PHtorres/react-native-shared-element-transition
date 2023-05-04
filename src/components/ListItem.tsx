import {StyleSheet, TouchableOpacity} from 'react-native';
import {IListItem} from '../interfaces/ILIstItem';
import Animated from 'react-native-reanimated';

interface ListItemProps {
  item: IListItem;
  itemIndex: number;
  onPress: () => void;
}

export const ListItem = ({item, itemIndex, onPress}: ListItemProps) => (
  <TouchableOpacity onPress={onPress}>
    <Animated.View
      style={styles.titleContainer}
      sharedTransitionTag={item.id + '-' + itemIndex + 'title-container'}>
      <Animated.Text
        style={styles.title}
        sharedTransitionTag={item.id + '-' + itemIndex + 'title'}>
        {item.title}
      </Animated.Text>
    </Animated.View>
    <Animated.View
      style={[styles.item]}
      sharedTransitionTag={item.id + '-' + itemIndex}>
      <Animated.Image
        sharedTransitionTag={item.id + '-' + itemIndex + 'image'}
        source={{uri: item.imageUrl}}
        style={styles.image}
      />
    </Animated.View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    overflow: 'hidden',
    position: 'relative',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    borderTopLeftRadius: 10,
    position: 'absolute',
    top: 0,
    zIndex: 99,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});
