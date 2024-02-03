import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Card from '../components/Card';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Section from '../components/Section';
import {COLORS} from '../constants/colors';

const suggestions = [{
    type: 'journal',
    text: 'Write about something that made you smile and why.'
  },
  {
    type: 'reflection',
    text: 'Describe someone in your life who you really appreciate but forget to thank.'
  },

  {
    type: 'curiousity',
    text: 'If you could get advice from any person, who would you choose? What would you ask?'
  },
];

const Suggestions = (() => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{
        margin: 20,
        marginBottom: 0,
        paddingBottom: 130,
      }}>
        {/* <Header /> */}
        <Section title="Daily Suggestions (For You)" />

        {suggestions.map((suggestion, key) => {
          let color = '';
          color = (suggestion.type == 'journal') ? COLORS.Blue : color;
          color = (suggestion.type == 'reflection') ? COLORS.Teal : color;
          color = (suggestion.type == 'feedback') ? COLORS.Pink : color;
          color = (suggestion.type == 'curiousity') ? COLORS.DarkPink : color;
          return (<Card key={key} style={{
            backgroundColor: color,
            padding: 15,
            marginVertical: 15,
          }}>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
              <View>
                <Text style={{
                  fontSize: 18
                }}>
                  {suggestion.type.toUpperCase()}
                </Text>
              </View>
              <TouchableOpacity>
                <MaterialCommunityIcon name='refresh' size={32} />
              </TouchableOpacity>
            </View>
            <Text style={{
              fontSize: 21,
              marginTop: 15,
              textAlign: 'left',
              justifyContent: 'flex-start'
            }}>
              {suggestion.text}
            </Text>
          </Card>)
        })}
      </View>
    </ScrollView>)
})

const SuggestionsStackNavigator = createNativeStackNavigator();

export const SuggestionsStackScreen = () => {
  return (
    <SuggestionsStackNavigator.Navigator>
      <SuggestionsStackNavigator.Screen name="suggestions" options={{ header: () => null }}>
        {(props: any) => <Suggestions {...props} />}
      </SuggestionsStackNavigator.Screen>
    </SuggestionsStackNavigator.Navigator>
  );
}

export default Suggestions;

