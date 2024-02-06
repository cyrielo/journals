import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AboutStackScreen } from '../screens/About';
import { PreferenceStackScreen } from '../screens/Preferences';
import {CreateReflectionStackScreen} from '../screens/CreateReflection';
import { ReflectionsStackScreen } from '../screens/Reflections';
import { SuggestionsStackScreen } from '../screens/Suggestions';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

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
          if (route.name === 'ref') {
            return <MaterialCommunityIcon name='grain' style={activeIconStyle} color={color} size={size} />;
          } else if (route.name === 'add') {
            return <MaterialCommunityIcon name='pencil-outline' style={activeIconStyle} color={color} size={size} />;
          } else if (route.name === 'pref') {
            return <MaterialCommunityIcon name='cog-outline' style={activeIconStyle} color={color} size={size} />;
          } else if (route.name === 'sug') {
            return <MaterialCommunityIcon name='brain' style={activeIconStyle} color={color} size={size} />;
          } else if (route.name === 'about') {
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
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#bda5e0',
        tabBarInactiveTintColor: 'grey',
      })}
      >
      <Tab.Screen name='ref' component={ReflectionsStackScreen} options={{ ...screenConfig }} />
      <Tab.Screen name='sug' component={SuggestionsStackScreen} options={{ tabBarBadge: 1, ...screenConfig }} />
      <Tab.Screen name='add' component={CreateReflectionStackScreen} options={{ ...screenConfig }}  />
      <Tab.Screen name='pref' component={PreferenceStackScreen} options={{ ...screenConfig }} />
      <Tab.Screen name='about' component={AboutStackScreen} options={{ ...screenConfig }} />
    </Tab.Navigator>
  );
});
