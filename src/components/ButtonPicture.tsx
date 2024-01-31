import React from 'react';
import type { PropsWithChildren } from 'react';
import { View, Text, ImageBackground, ViewStyle, TouchableOpacity, ImageSourcePropType } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type ButtonProps = PropsWithChildren<{
  src: ImageSourcePropType;
  title: string;
  disabled?: boolean;
  style?: ViewStyle;
  icon?: string;
  onPress?: () => {};
}>

export default ({ src, title, disabled, children, icon, onPress }: ButtonProps) => {
  return(
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled} 
      style={{
        backgroundColor: '#171717',
        borderColor: '#171717',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 0,
        borderRadius: 50,
      }}
      onPress={onPress}
      >
      <ImageBackground
        style={{
          height: 50,
          width: 50,
          margin: 0,
        }}
        resizeMode='center'
        source={src}
        borderRadius={90}
      />
      <Text style={{
        fontSize: 16,
        color: 'white',
        marginHorizontal: 10,
        fontWeight: '400',
      }}>{title}</Text>
      {children}
      { icon ? <Icon style={{ marginHorizontal: 10 }} name={icon} color={'white'} size={24} /> : null  }
     


    </TouchableOpacity>
  );
}