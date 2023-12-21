import {
  Alert,
  GestureResponderEvent,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Button, Title, Card } from '../components/ui';
import { ScreenType } from '../lib/utils/types';
import { Colors } from '../lib/constants/colors';

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
    <View style={styles.container}>
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
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <Button onPress={confirmNumHandler}>Confirm</Button>
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={resetNum}>Reset</Button>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    flex: 1,
    width: '90%',
  },

  input: {
    height: 50,
    fontSize: 36,
    width: 50,
    borderBottomColor: Colors.primary[500],
    borderBottomWidth: 2,
    color: Colors.accent,
    marginVertical: 8,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginTop: 10,
    gap: 10,
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    color: Colors.accent,
    fontWeight: 'bold',
    fontSize: 22,
  },
});
