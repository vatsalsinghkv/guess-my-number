import { FlatList, StyleSheet, View } from 'react-native';

import GuessItem from './GuessItem';

type Props = {
  guesses: number[];
};

const GuessList = ({ guesses }: Props) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={guesses}
        renderItem={({ item, index }) => (
          <GuessItem i={guesses.length - index}>{item}</GuessItem>
        )}
        keyExtractor={(item, i) => `id${item}-${i}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    paddingVertical: 16,
  },
});

export default GuessList;
