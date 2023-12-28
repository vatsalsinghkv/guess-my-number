import { Dimensions, Platform, StyleSheet, Text } from 'react-native';

type Props = {
  children: React.ReactNode;
};

const Title = ({ children }: Props) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: 'open-sans-bold',
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    padding: Dimensions.get('window').width <= 375 ? 10 : 12,
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    // borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderWidth: 2,
    borderColor: '#fff',
  },
});

export default Title;
