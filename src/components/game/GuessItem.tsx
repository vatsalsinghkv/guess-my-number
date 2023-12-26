import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '../../lib/constants/colors';

type Props = {
  i: number;
  children: React.ReactNode;
};

const GuessItem = ({ i, children }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>#{i}</Text>
      <Text style={styles.text}>Computer's Guess: {children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: Colors.primary[500],
    borderRadius: 40,
    backgroundColor: Colors.accent,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 3,
    shadowOpacity: 0.25,
  },
  text: {
    fontFamily: 'open-sans-bold',
  },
});

export default GuessItem;
