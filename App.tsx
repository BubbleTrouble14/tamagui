/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import {Button, TamaguiProvider} from 'tamagui';

import {Plus} from '@tamagui/lucide-icons';
import config from './tamagui.config';

function App(): JSX.Element {
  return (
    <TamaguiProvider config={config}>
      <SafeAreaView>
        <Button icon={Plus}>Hello world</Button>
      </SafeAreaView>
    </TamaguiProvider>
  );
}

export default App;
