import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IListItem} from '../interfaces/ILIstItem';

interface ListItemDetailScreenProps {
  sharedTransitionTag: string;
  item: IListItem;
}

export type StackParamList = {
  ListScreen: undefined;
  ListItemDetailScreen: ListItemDetailScreenProps;
};

export type ListItemDetailScreenNavigationProps = NativeStackScreenProps<
  StackParamList,
  'ListItemDetailScreen'
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamList {}
  }
}
