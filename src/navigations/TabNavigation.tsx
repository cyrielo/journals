import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { AboutStackScreen } from '../screens/About';
import { PreferenceStackScreen } from '../screens/Preferences';
import CreateReflection from '../screens/CreateReflection';
import { ReflectionsStackScreen } from '../screens/Reflections';
import { SuggestionsStackScreen } from '../screens/Suggestions';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';

//MaterialCommunityIcons
//grain brain

//Ionicon
//create-sharp filter-outline

export const screenConfig = { header: () => null };

const Tab = createBottomTabNavigator();

export default (() => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          size = 32;
          let activeIconStyle = {};
          if (focused) {
            activeIconStyle = { 
              ...activeIconStyle,
              backgroundColor: '#171717',
              padding: 15,
              borderRadius: 150,
              position: 'relative',
            };
          }
          if (route.name === 'Reflections') {
            return <MaterialCommunityIcon name='grain' style={activeIconStyle} color={color} size={size} />;
          } else if (route.name === 'Add') {
            return <MaterialCommunityIcon name='pencil-outline' style={activeIconStyle} color={color} size={size} />;
          } else if (route.name === 'Preferences') {
            return <MaterialCommunityIcon name='cog-outline' style={activeIconStyle} color={color} size={size} />;
          } else if (route.name === 'Suggestion') {
            return <MaterialCommunityIcon name='brain' style={activeIconStyle} color={color} size={size} />;
          } else if (route.name === 'About') {
            return <MaterialCommunityIcon name='information-variant' style={activeIconStyle} color={color} size={size} />
          }
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          marginHorizontal: 20,
          paddingHorizontal: 10,
          borderRadius: 40,
          height: 80,
        },
        tabBarActiveTintColor: '#bda5e0',
        tabBarInactiveTintColor: 'grey',
        
      })}
      
      >
      <Tab.Screen name='Reflections' component={ReflectionsStackScreen} options={{ ...screenConfig }} />
      <Tab.Screen name='Suggestion' component={SuggestionsStackScreen} options={{ tabBarBadge: 1, ...screenConfig }} />
      <Tab.Screen name='Add' component={CreateReflection} options={{ ...screenConfig }} />
      <Tab.Screen name='Preferences' component={PreferenceStackScreen} options={{ ...screenConfig }} />
      <Tab.Screen name='About' component={AboutStackScreen} options={{ ...screenConfig }} />
    </Tab.Navigator>
  );
});
