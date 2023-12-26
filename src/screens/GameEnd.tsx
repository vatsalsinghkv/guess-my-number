import { Image, StyleSheet, Text, View } from 'react-native';

import { Button, Title } from '../components/ui';
import { Colors } from '../lib/constants/colors';
import { ScreenType } from '../lib/utils/types';

type Props = {
  onScreenChange: (value: ScreenType) => void;
  num: number;
};

export default function GameEnd({ onScreenChange, num }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Title>Game Over!</Title>

        <View style={styles.center}>
          <View style={styles.imgContainer}>
            <Image
              style={styles.imgContainer}
              source={require('../assets/success.png')}
            />
          </View>
        </View>

        {/* Applying text styles on the parent text container also affects the child text containers. */}
        {/* But this doesn't happen when you apply text styles to view it doesn't affect the child text containers. */}
        <Text style={styles.textSummary}>
          Your phone needed <Text style={styles.textHighlight}>{num}</Text>{' '}
          rounds to guess the number{' '}
          <Text style={styles.textHighlight}>{num}</Text>
        </Text>
      </View>

      <Button variant='primary' onPress={() => onScreenChange('start')}>
        New Game
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  resultContainer: {
    gap: 36,
  },
  center: { alignItems: 'center' },
  imgContainer: {
    height: 300,
    width: 300,
    borderRadius: 150,
    borderColor: Colors.primary[500],
    borderWidth: 1,
    overflow: 'hidden',
    marginHorizontal: 'auto',
  },
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
