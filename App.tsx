import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { ScreenType } from './src/lib/utils/types';
import { GameEnd, GamePlaying, GameStart } from './src/screens';
import { Colors } from './src/lib/constants/colors';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('start');

  const [num, setNum] = useState(0);

  const changeNumHandler = (num: number) => {
    setNum(num);
  };

  const screenChangeHandler = (screenType: ScreenType) => {
    setCurrentScreen(screenType);
  };

  const screen =
    currentScreen === 'start' ? (
      <GameStart
        num={num}
        onNumChange={changeNumHandler}
        onScreenChange={screenChangeHandler}
      />
    ) : currentScreen === 'playing' ? (
      <GamePlaying num={num} onScreenChange={screenChangeHandler} />
    ) : (
      <GameEnd />
    );

  return (
    <LinearGradient
      colors={[Colors.primary[400], Colors.accent]}
      style={styles.full}
    >
      <ImageBackground
        source={require('./src/assets/dice.jpeg')}
        resizeMode='cover'
        style={styles.full}
        imageStyle={styles.bgImg}
      >
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    // backgroundColor: '#ddb52f',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  full: {
    flex: 1,
  },
  bgImg: {
    flex: 1,
    opacity: 0.15,
  },
});
