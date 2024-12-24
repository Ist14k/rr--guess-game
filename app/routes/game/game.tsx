import React from 'react';
import { PlayScreen } from '@/screens/PlayScreen';
import { StartScreen } from '@/screens/StartScreen';
import { EndScreen } from '@/screens/EndScreen';

export default function game() {
  const [currentScreen, setCurrentScreen] = React.useState<React.ReactElement>(<StartScreen />);

  // setTimeout(() => {
  //   setCurrentScreen(<PlayScreen />);
  // }, 5000);

  // set alert if anyone tries to navigate away from the page

  return <div>{currentScreen}</div>;
}
