import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import type {PropsWithChildren} from 'react';
import TabNavigation from './src/navigations/TabNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
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

  // <SafeAreaView style={AppStyle.container}>
  //   <NavigationContainer>
  //     <ScrollView scrollEnabled>
  //       <Reflections />
  //     </ScrollView>
  //   </NavigationContainer>
  // </SafeAreaView>
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{ headerShown: false,  }}
        />
        </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
