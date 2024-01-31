import React from 'react';
import { View, Text, ImageBackground, DimensionValue } from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
//@ts-ignore
import ProfilePhoto from '../assets/img/profile.jpeg';
//@ts-ignore
import ProfilePhoto2 from '../assets/img/profilePhoto.png';

const images = [
  { img: ProfilePhoto },
  { img: ProfilePhoto2 },
  { img: ProfilePhoto },
  { img: ProfilePhoto2 },
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

      <View style={{
        backgroundColor: '#bda5e0',
        paddingTop: 10,
        borderRadius: 15
        }}>
        <Text style={{
          fontWeight: 'bold',
          fontSize: 16,
          paddingVertical: 4,
          paddingHorizontal: 15
          }}>
          Something I've always been curious about? 
        </Text>
        <View style={{
          paddingHorizontal: 15,
          paddingVertical: 4,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          { images.length > 2 ? (
            <>
              <View style={{ height: 200, width: '50%' }}>
                <ImageBackground
                  style={{
                    height: '100%',
                    width: 'auto',
                    margin: 0,
                  }}
                  resizeMode='cover'
                  resizeMethod='scale'
                  source={images[0].img}
                  borderRadius={10}
                />
              </View>
              <View style={{
                height: 200,
                flexDirection: 'row',
                width: '48%',
                alignContent:'stretch',
                flexWrap:'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                }}>
              {images.map((item, idx) => {
                const len = images.length;
                const mainPhoto = images[0].img;
                //let mainWidth = len === 1 ? '100%' : '50%' as DimensionValue;
                if (idx === 3) {
                  return (
                    <View key={idx} style={{ height: 90, width: '48%' }}>
                      <View style={{
                        position: 'absolute',
                        zIndex: 10,
                        height: '100%',
                        width: '100%',
                        borderRadius: 10,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(23,23,23,0.67)'
                      }}>
                        <Text style={{ fontSize: 21, color: '#e8e8e8'}}>+ 4</Text>
                      </View>
                      <ImageBackground
                        style={{
                          height: '100%',
                          width: 'auto',
                          margin: 0,
                        }}
                        resizeMode='cover'
                        resizeMethod='scale'
                        source={item.img}
                        borderRadius={10}
                      />
                    </View>
                  )
                }
                return (
                  <View key={idx} style={{ height: 90, width: '48%' }}>
                    <ImageBackground
                      style={{
                        height: '100%',
                        width: 'auto',
                        margin: 0,
                      }}
                      resizeMode='cover'
                      resizeMethod='scale'
                      source={item.img}
                      borderRadius={10}
                    />
                  </View>
                );
                })}
              </View>
            </>
          ) : images.map((item) => {
            return (
              <View style={{ height: 200, width: images.length == 1 ? '100%' : '49%' }}>
                <ImageBackground
                  style={{
                    height: '100%',
                    width: 'auto',
                    margin: 0,
                  }}
                  resizeMode='cover'
                  resizeMethod='scale'
                  source={item.img}
                  borderRadius={10}
                />
              </View>
            )
          })}

        </View>
        {/*
        1 <View style={{
          paddingHorizontal: 15,
          paddingVertical: 4
        }}>
          <ImageBackground
            style={{
              height: 250,
              width: '100%',
              margin: 0,
            }}
            resizeMode='cover'
            resizeMethod='scale'
            source={ProfilePhoto}
            borderRadius={10}
          />
        </View> */}
        <View style={{
          paddingHorizontal: 15,
          paddingVertical: 4,
        }}>
          <Text>
            I have always been curious about the vast void of outer space
          </Text>
        </View>
        <View style={{
          marginVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          borderTopWidth: 0.4,
          paddingHorizontal: 15,
          paddingTop: 4,
          }}>
          <View>
            <Text style={{

              }}>Fri, Jan 14th</Text>
          </View>
          <View>
            <Icon name='bookmark' color={'#171717'} size={22} />
          </View>
        </View>
      </View>
    </View>
  )
}

export default Reflections;
