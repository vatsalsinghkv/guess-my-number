import {
  Alert,
  GestureResponderEvent,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';

import { Button, ButtonGroup, Card, Title } from '../components/ui';
import { Colors } from '../lib/constants/colors';
import { ScreenType } from '../lib/utils/types';

type Props = {
  onScreenChange: (value: ScreenType) => void;
  num: number;
  onNumChange: (value: number) => void;
};

export default function GameStart({ onScreenChange, num, onNumChange }: Props) {
  const changeNumHandler = (num: string) => {
    onNumChange(+num);
  };

  const resetNum = () => onNumChange(0);

  const confirmNumHandler = (e: GestureResponderEvent) => {
    const chosenNum = +num;
    if (isNaN(chosenNum) || chosenNum <= 0 || chosenNum >= 99) {
      // Alert is an api which uses native components and APIs
      return Alert.alert(
        'Invalid number!',
        'Please enter a valid number between 0 and 99',
        [{ text: 'Okay', style: 'cancel', onPress: resetNum }]
      );
    }

    onScreenChange('playing');
  };

  return (
    <>
      <Title>Guess my number</Title>
      <Card>
        <Text style={styles.instructionText}>Enter a number</Text>
        <TextInput
          style={styles.input}
          maxLength={2}
          keyboardType='number-pad'
          placeholder='00'
          value={`${num || ''}`}
          onChangeText={changeNumHandler}
          autoCapitalize='none' // For emails & password
          autoCorrect={false} // For emails & password
        />
        <ButtonGroup>
          <Button onPress={confirmNumHandler} fullWidth>
            Confirm
          </Button>
          <Button onPress={resetNum} fullWidth>
            Reset
          </Button>
        </ButtonGroup>
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    fontSize: 36,
    width: 50,
    borderBottomColor: Colors.primary[500],
    borderBottomWidth: 2,
    color: Colors.accent,
    marginVertical: 8,
    fontWeight: 'bold',
    fontFamily: 'open-sans-bold',
  },
  instructionText: {
    color: Colors.accent,
    fontWeight: 'bold',
    fontFamily: 'open-sans-bold',
    fontSize: 22,
  },
});
