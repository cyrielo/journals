import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Reflections from './src/screens/Reflections';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    
  };

  const AppStyle = StyleSheet.create({
    container: {
      margin: 10
    }
  });

  return (
    <SafeAreaView style={AppStyle.container}>
      <Reflections />
    </SafeAreaView>
  );
}


export default App;
