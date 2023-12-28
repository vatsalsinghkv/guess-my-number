import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

import { Button, Title } from '../components/ui';
import { Colors } from '../lib/constants/colors';

type Props = {
  onNewGame: () => void;
  guesses: number[];
  num: number;
};

export default function GameEnd({ onNewGame, num, guesses }: Props) {
  const { height } = useWindowDimensions();

  const { imgContainer } = StyleSheet.create({
    imgContainer: {
      height: height > 450 ? 250 : 120,
      width: height > 450 ? 250 : 120,
      borderRadius: 150,
      borderColor: Colors.primary[500],
      borderWidth: 1,
      overflow: 'hidden',
      marginHorizontal: 'auto',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Title>Game Over!</Title>

        <View style={styles.center}>
          <View style={imgContainer}>
            <Image
              style={imgContainer}
              source={require('../assets/success.png')}
            />
          </View>
        </View>

        {/* Applying text styles on the parent text container also affects the child text containers. */}
        {/* But this doesn't happen when you apply text styles to view it doesn't affect the child text containers. */}
        <Text style={styles.textSummary}>
          Your phone needed{' '}
          <Text style={styles.textHighlight}>{guesses.length}</Text> rounds to
          guess the number <Text style={styles.textHighlight}>{num}</Text>
        </Text>
      </View>

      <Button variant='primary' onPress={onNewGame}>
        New Game
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    gap: 20,
  },
  resultContainer: {
    gap: 36,
  },
  center: { alignItems: 'center' },
  img: {
    height: '100%',
    width: '100%',
  },
  // Text Styles
  textSummary: {
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'open-sans',
  },
  textHighlight: {
    color: Colors.primary[500],
    fontWeight: 'bold',
    fontFamily: 'open-sans-bold',
  },
});
