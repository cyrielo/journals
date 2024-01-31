 import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ButtonPicture from './ButtonPicture';
import Icon from 'react-native-vector-icons/FontAwesome';
//@ts-ignore
import ProfilePhoto from '../assets/img/profile.jpeg';
const HeaderStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center',
  }
});

const Header = () => {
  return (
    <View style={HeaderStyles.headerContainer}>
      <ButtonPicture 
        src={ProfilePhoto}
        title='Sarah'
        icon='angle-down'
      />
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between'
        }}>
        <TouchableOpacity>
          <Icon style={{
            marginHorizontal: 10,
            backgroundColor: '#c8eecd',
            padding: 10,
            borderRadius: 50
            }}
            name='search'
            color={'#1a1b26'}
            size={24}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon style={{
            marginHorizontal: 10,
            backgroundColor: '#bda5e0',
            padding: 10,
            borderRadius: 50
          }} name='bell' color={'#1a1b26'} size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;