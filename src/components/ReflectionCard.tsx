import React from 'react';
import type { PropsWithChildren } from 'react';
import { View, Text, ImageBackground, DimensionValue, StyleSheet, ImageSourcePropType } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ReflectionCardStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center',
  }
});

interface Media {
  src: ImageSourcePropType | undefined
}

type ReflectionCardProps = PropsWithChildren<{
  title: string;
  description: string;
  media?: Media[];
  isBookMarked: boolean;
  date: string;
  onPress?: () => {};
}>

const ReflectionCard = ({ title, description, media = [], isBookMarked, date }: ReflectionCardProps): React.JSX.Element =>  {
  const mediaLen = media?.length;
  const altMedia = mediaLen > 2 ? media.slice(1,5) : [];
  const remaining = media.length - 5;

  return (
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
        {title}
      </Text>
      <View style={{
        paddingHorizontal: 15,
        paddingVertical: 4,
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        {mediaLen > 2 ? (
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
                source={media[0].src}
                borderRadius={10}
              />
            </View>
            <View style={{
              height: 200,
              flexDirection: 'row',
              width: '48%',
              alignContent: 'stretch',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              {altMedia.map((item, idx) => {
                if (idx < 2 && (altMedia.length) == 2 ) {
                  return (
                    <View key={idx} style={{ height: 90, width: '100%' }}>
                      <ImageBackground
                        style={{
                          height: '100%',
                          width: 'auto',
                          margin: 0,
                        }}
                        resizeMode='cover'
                        resizeMethod='scale'
                        source={item.src}
                        borderRadius={10}
                      />
                    </View>
                  );
                }
                if (idx == 2 && (altMedia.length - 1) == (idx)) {
                  return (
                    <View key={idx} style={{ height: 100, width: '100%' }}>
                      <ImageBackground
                        style={{
                          height: '100%',
                          width: 'auto',
                          margin: 0,
                        }}
                        resizeMode='cover'
                        resizeMethod='scale'
                        source={item.src}
                        borderRadius={10}
                      />
                    </View>
                  );
                }
                if (idx == 3 && remaining > 0 ) {
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
                        <Text style={{ fontSize: 21, color: '#e8e8e8' }}>+ {remaining}</Text>
                      </View>
                      <ImageBackground
                        style={{
                          height: '100%',
                          width: 'auto',
                          margin: 0,
                        }}
                        resizeMode='cover'
                        resizeMethod='scale'
                        source={item.src}
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
                      source={item.src}
                      borderRadius={10}
                    />
                  </View>
                );
              })}
            </View>
          </>
        ) : media.map((item) => {
          return (
            <View style={{ height: 200, width: mediaLen == 1 ? '100%' : '49%' }}>
              <ImageBackground
                style={{
                  height: '100%',
                  width: 'auto',
                  margin: 0,
                }}
                resizeMode='cover'
                resizeMethod='scale'
                source={item.src}
                borderRadius={10}
              />
            </View>
          )
        })}
      </View>
      <View style={{
        paddingHorizontal: 15,
        paddingVertical: 4,
      }}>
        <Text>
          {description}
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
          <Text>{date}</Text>
        </View>
        <View>
          <Icon name={isBookMarked ? 'bookmark' : 'bookmark-o'} color={'#171717'} size={22} />
        </View>
      </View>
    </View>
  )
};

export default ReflectionCard;