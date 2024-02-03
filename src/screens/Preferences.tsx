import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Section from '../components/Section';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
const Preferences = (() => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{
        margin: 20,
        marginBottom: 0,
        paddingBottom: 130
      }}>
        <Section title='General' />
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomWidth: 0.5,
            paddingBottom: 15,
            marginBottom: 20,
            }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialCommunityIcon style={{marginRight: 10}} name='white-balance-sunny' size={32}/>
            <Text style={{fontSize: 18}}>Theme</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, marginRight: 10 }}>
              Light
            </Text>
            <MaterialCommunityIcon style={{ }} name='chevron-right' size={32} />
          </View>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottomWidth: 0.5,
          paddingBottom: 15,
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicon style={{ marginRight: 10 }} name='language' size={32} />
            <Text style={{ fontSize: 18 }}>Language</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, marginRight: 10 }}>
              English
            </Text>
            <MaterialCommunityIcon style={{}} name='chevron-right' size={32} />
          </View>
        </View>
    </View>
    </ScrollView>)
})

const PreferenceStackNavigator = createNativeStackNavigator();

export const PreferenceStackScreen = () => {
  return (
    <PreferenceStackNavigator.Navigator>
      <PreferenceStackNavigator.Screen name="Preferences" options={{
        headerTitleAlign: 'center',
        headerBackground: () => null,
      }}>
        {(props: any) => <Preferences {...props} />}
      </PreferenceStackNavigator.Screen>
    </PreferenceStackNavigator.Navigator>
  );
}

export default Preferences;

