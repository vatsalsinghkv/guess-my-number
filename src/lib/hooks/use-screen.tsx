import { createContext, useContext, useState } from 'react';

type ScreenType = 'start' | 'playing' | 'end';

type StateType = {
  screen: ScreenType;
  changeScreen: (screen: ScreenType) => void;
};

const initialState: StateType = {
  screen: 'start',
  changeScreen: () => {},
};

const ScreenTypeContext = createContext(initialState);

export const ScreenContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('start');

  const changeScreen = (screenType: ScreenType) => {
    setCurrentScreen(screenType);
  };

  return (
    <ScreenTypeContext.Provider value={{ screen: currentScreen, changeScreen }}>
      {children}
    </ScreenTypeContext.Provider>
  );
};

export default function useScreen() {
  return useContext(ScreenTypeContext);
}
