import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
//@ts-ignore
import ProfilePhoto from '../assets/img/profile.jpeg';
//@ts-ignore
import ProfilePhoto2 from '../assets/img/profilePhoto.png';
import ReflectionCard from '../components/ReflectionCard';
import Section from '../components/Section';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const images = [
  { src: ProfilePhoto2 },
  { src: ProfilePhoto },
  { src: ProfilePhoto2 },
  { src: ProfilePhoto2 },
  { src: ProfilePhoto2 },
  { src: ProfilePhoto },
  { src: ProfilePhoto2 },
];

const Reflections = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{
        margin: 20,
        marginBottom: 0,
        paddingBottom: 130,
      }}>
        <Header />
        <Section title="Today's Reflections" />
        <ReflectionCard
          title='I honestly Love Jesus'
          description='Do i love Jesus?'
          date='Today 2:45 AM'
          isBookMarked={false}
          media={images}
          style={{marginBottom: 25}}
        />

        <Section title="Yesterday's Reflections" />

        <ReflectionCard
          title='I honestly Love Jesus'
          description='Do i love Jesus?'
          date='Today 2:45 AM'
          isBookMarked={true}
          style={{ marginBottom: 25 }}
        />
        <ReflectionCard
          title='I honestly Love Jesus'
          description='Do i love Jesus?'
          date='Today 2:45 AM'
          isBookMarked={true}
        />
      </View>

    </ScrollView>
  )
}

const ReflectionsStackNavigator = createNativeStackNavigator();

export const ReflectionsStackScreen = () => {
  return (
    <ReflectionsStackNavigator.Navigator>
      <ReflectionsStackNavigator.Screen name="Reflections" options={{ header: () => null }}>
        {(props: any) => <Reflections {...props} />}
      </ReflectionsStackNavigator.Screen>
    </ReflectionsStackNavigator.Navigator>
  );
}

export default Reflections;
