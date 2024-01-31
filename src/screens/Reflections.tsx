import React from 'react';
import { View, Text, ImageBackground, DimensionValue } from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
//@ts-ignore
import ProfilePhoto from '../assets/img/profile.jpeg';
//@ts-ignore
import ProfilePhoto2 from '../assets/img/profilePhoto.png';
import ReflectionCard from '../components/ReflectionCard';
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
    <View>
      <Header />
      <View style={{ marginVertical: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: '400' }}>
          Today's Reflections
        </Text>
      </View>
      <ReflectionCard
        title='I honestly Love Jesus'
        description='Do i love Jesus?'
        date='Today 2:45 AM'
        isBookMarked={false}
        media={images}
      />
    </View>
  )
}

export default Reflections;
