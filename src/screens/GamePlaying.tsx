import { Alert, StyleSheet, Text, View } from 'react-native';
import { Button, Title } from '../components/ui';
import { useEffect, useState } from 'react';
import { generateRandomBetween } from '../lib/utils';
import { NumContainer } from '../components/game';
import { ScreenType } from '../lib/utils/types';

let minBoundary = 1;
let maxBoundary = 100;

type Props = {
  onScreenChange: (value: ScreenType) => void;
  num: number;
};

export default function GamePlaying(this: any, { num, onScreenChange }: Props) {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, num)
  );

  useEffect(() => {
    if (currentGuess === num) {
      onScreenChange('end');
    }
  }, [currentGuess]);

  const guessNumberHandler = (direction: 'lower' | 'higher') => {
    console.log(minBoundary, maxBoundary);
    // Guard Clause
    if (
      (direction === 'lower' && currentGuess < num) ||
      (direction === 'higher' && currentGuess > num)
    ) {
      return Alert.alert("Don't lie!", 'You know this is wrong!', [
        // Array is used to add multiple buttons
        { text: 'Sorry', style: 'cancel' },
      ]);
    }

    if (direction === 'higher') {
      minBoundary = currentGuess + 1;
    } else {
      maxBoundary = currentGuess;
    }
    setCurrentGuess(
      generateRandomBetween(minBoundary, maxBoundary, currentGuess)
    );
  };

  return (
    <View>
      <Title>Opponent's Guess</Title>
      <NumContainer>{currentGuess}</NumContainer>

      <View>
        <Text style={styles.text}>Higher or Lower?</Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <Button onPress={guessNumberHandler.bind(this, 'higher')}>+</Button>
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={guessNumberHandler.bind(this, 'lower')}>-</Button>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonContainer: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
  },
});
