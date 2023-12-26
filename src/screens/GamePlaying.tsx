import { Entypo } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

import { GuessList, NumContainer } from '../components/game';
import { Button, ButtonGroup, Card, Title } from '../components/ui';
import { Colors } from '../lib/constants/colors';
import { generateRandomBetween } from '../lib/utils';
import { ScreenType } from '../lib/utils/types';

let minBoundary = 1;
let maxBoundary = 100;

type Props = {
  onScreenChange: (value: ScreenType) => void;
  onGuess: (num: number) => void;
  guesses: number[];
  num: number;
};

export default function GamePlaying(
  this: any,
  { num, onScreenChange, onGuess, guesses }: Props
) {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, num)
  );

  useEffect(() => {
    if (currentGuess === num) {
      onScreenChange('end');
    }
  }, [currentGuess]);

  const guessNumberHandler = (direction: 'lower' | 'higher') => {
    // console.log(minBoundary, maxBoundary);
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

    const guess = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(guess);
    onGuess(guess);
  };

  return (
    <>
      <Title>Opponent's Guess</Title>
      <NumContainer>{currentGuess}</NumContainer>
      <Card>
        <Text style={styles.text}>Higher or Lower?</Text>
        <ButtonGroup style={styles.group}>
          <Button fullWidth onPress={guessNumberHandler.bind(this, 'lower')}>
            <Entypo name='minus' size={24} />
          </Button>
          <Button fullWidth onPress={guessNumberHandler.bind(this, 'higher')}>
            <Entypo name='plus' size={24} />
          </Button>
        </ButtonGroup>
      </Card>
      <GuessList guesses={guesses} />
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: Colors.accent,
    fontSize: 18,
    fontFamily: 'open-sans',
    fontWeight: 'bold',
  },
  group: {
    marginTop: 10,
  },
});
