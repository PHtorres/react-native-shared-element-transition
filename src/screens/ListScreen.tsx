import {useNavigation} from '@react-navigation/native';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {ListItems} from '../data/ListItems';
import {IListItem} from '../interfaces/ILIstItem';
import {ListItem} from '../components/ListItem';
import {Screen} from '../components/Screen';
import {ListItemSeparator} from '../components/ListItemSeparator';

export const ListScreen = () => {
  const {navigate} = useNavigation();
  const renderItem = ({item, index}: ListRenderItemInfo<IListItem>) => {
    return (
      <ListItem
        item={item}
        itemIndex={index}
        onPress={() => {
          navigate('ListItemDetailScreen', {
            sharedTransitionTag: item.id + '-' + index,
            item,
          });
        }}
      />
    );
  };

  return (
    <Screen>
      <FlatList
        data={ListItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
};
