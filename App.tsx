import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';

import { Colors } from './src/lib/constants/colors';
import { ScreenType } from './src/lib/utils/types';
import { GameEnd, GamePlaying, GameStart } from './src/screens';

// Keep the splash screen visible while fonts loaded
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('start');
  const [guesses, setGuesses] = useState<number[]>([]);
  const [num, setNum] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./src/assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./src/assets/fonts/OpenSans-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    fontsLoaded && (await SplashScreen.hideAsync());
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const changeNumHandler = (num: number) => {
    setNum(num);
  };

  const screenChangeHandler = (screenType: ScreenType) => {
    setCurrentScreen(screenType);
  };

  const reset = () => {
    setCurrentScreen('start');
    setNum(0);
    setGuesses([]);
  };

  const addGuess = (num: number) => {
    setGuesses((prev) => [num, ...prev]);
  };

  const screen =
    currentScreen === 'start' ? (
      <GameStart
        num={num}
        onNumChange={changeNumHandler}
        onScreenChange={screenChangeHandler}
      />
    ) : currentScreen === 'playing' ? (
      <GamePlaying
        num={num}
        guesses={guesses}
        onScreenChange={screenChangeHandler}
        onGuess={addGuess}
      />
    ) : (
      <GameEnd guesses={guesses} onNewGame={reset} num={num} />
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
        <SafeAreaView style={styles.container}>
          <View onLayout={onLayoutRootView} style={styles.contentContainer}>
            {screen}
          </View>
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 24,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  contentContainer: {
    flex: 1,
    width: '90%',
    paddingVertical: 16,
  },
  full: {
    flex: 1,
  },
  bgImg: {
    flex: 1,
    opacity: 0.15,
  },
});
