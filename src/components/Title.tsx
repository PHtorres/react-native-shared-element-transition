import {Text, TextProps} from 'react-native';

interface TitleProps extends TextProps {}
export const Title = ({children, ...rest}: TitleProps) => (
  <Text
    style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}
    {...rest}>
    {children}
  </Text>
);
