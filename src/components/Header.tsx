 import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewProps } from 'react-native';
import ButtonPicture from './ButtonPicture';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Droppable from './Droppable';
//@ts-ignore
import GuestProfilePhoto from '../assets/img/image.png';
const HeaderStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center',
    position: 'relative',
    zIndex: 1
  }
});

type HeaderProps = {
  hasSearch? : boolean;
  hasFilter?: boolean;
} & ViewProps

const Header = ({ hasSearch = true, hasFilter = true } : HeaderProps) => {
  return (
    <View style={HeaderStyles.headerContainer}>
      <Droppable>
        <ButtonPicture
          src={GuestProfilePhoto}
          title='Guest'
          icon='angle-down'
        />
      </Droppable>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        }}>
       { hasSearch && (
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

       )}
        {
        hasFilter && (
          <Droppable dropdownContent={(<View style={{
            shadowColor: '#000000',
            shadowRadius: 4,
            shadowOffset: { height: 4, width: 0 },
            shadowOpacity: 0.5,
            backgroundColor: 'darkgrey',
            borderRadius: 10,
            padding: 10,
          }}><Text>Hello</Text></View>)}>
            <Ionicon style={{
              marginHorizontal: 10,
              backgroundColor: '#bda5e0',
              padding: 10,
              borderRadius: 50
            }} name='filter' color={'#1a1b26'} size={24} />
          </Droppable>
        )}
      </View>
    </View>
  );
};
export default Header;
