import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import TextInputArea from '../components/TextInputArea';
import { COLORS } from '../constants/colors';
const RightButton = () => {
  return (
    <View>
      <TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: '400', color: COLORS.DarkBlueGrey }}>Save</Text>
      </TouchableOpacity>
    </View>
  )
}
const CreateReflection = (() => {
  const [isKeyboardOpen, setKeyboardOpen] = useState(false);
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={{}}
      showsVerticalScrollIndicator={false}>
        <View style={{
          margin: 20,
          marginBottom: 0,
          paddingBottom: (130),
          height: '100%'
        }}>
          <TextInputArea
            placeholder='Start writing...'
            onFocus={() => setKeyboardOpen(true)}
            onBlur={() => setKeyboardOpen(false)}
            style={{
              fontSize: 18,
            }}
          />
          <View style={{
            position: 'absolute',
            bottom: (isKeyboardOpen) ? 20 : 125,
            width: '100%',
            backgroundColor: COLORS.DarkBlueGrey,
            padding: 10,
          }}>
          <KeyboardAvoidingView behavior='padding' style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems:'center',
          }}>

            <TouchableOpacity>
              <MaterialCommunityIcon style={{ marginHorizontal: 20 }} name='camera-image' size={32} />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcon style={{ marginHorizontal: 20 }} name='camera' size={32} />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcon style={{ marginHorizontal: 20 }} name='microphone-outline' size={32} />
            </TouchableOpacity>
          </KeyboardAvoidingView>
          </View>
        </View>
    </ScrollView>)
})


const CreateReflectionStackNavigator = createNativeStackNavigator();

export const CreateReflectionStackScreen = () => {
  return (
    <CreateReflectionStackNavigator.Navigator>
      <CreateReflectionStackNavigator.Screen
        name="Fri Feb 3"
        options={{
          headerTitleAlign: 'center',
          headerBackground: () => null,
          headerLeft: () => <MaterialCommunityIcon name='bookmark-check-outline' size={32} />,
          headerRight: () => <RightButton />,
          }}>
        {(props: any) => <CreateReflection {...props} />}
      </CreateReflectionStackNavigator.Screen>
    </CreateReflectionStackNavigator.Navigator>
  );
}

export default CreateReflection;

