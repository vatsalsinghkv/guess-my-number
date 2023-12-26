import { StyleSheet, Text, View, ViewStyle } from 'react-native';

type Props = { children: React.ReactNode; style?: ViewStyle };

const ButtonGroup = ({ children, style }: Props) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
});

export default ButtonGroup;
