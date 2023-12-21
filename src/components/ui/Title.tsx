import { StyleSheet, Text } from 'react-native';

type Props = {
  children: React.ReactNode;
};

const Title = ({ children }: Props) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    padding: 12,
    borderWidth: 2,
    borderColor: '#fff',
  },
});

export default Title;
