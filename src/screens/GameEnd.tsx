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
      <Title>Game Over!</Title>

      <View style={styles.center}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.imgContainer}
            source={require('../assets/success.png')}
          />
        </View>
      </View>

      <Button onPress={() => onScreenChange('start')}>Play Again</Button>

      <Text>
        Your phone needed 5 rounds to guess the number <Text>{num}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
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
});
