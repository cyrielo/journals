import React from 'react';
import { View, Text, ScrollView} from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AboutStackNavigator = createNativeStackNavigator();
const About = (() => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{
        margin: 20,
        marginBottom: 0,
        paddingBottom: 130,
        }}>
        <View>
          <View style={{
            flexDirection: 'row', 
            justifyContent: 'space-between',
            alignItems: 'center',
            
          }}>
            <Text style={{fontSize: 18}}>
              Version:
            </Text>
            <Text style={{ fontWeight: '500', fontSize: 18 }}>
              1.02.24
            </Text>
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',

          }}>
            <Text style={{ fontSize: 18 }}>
              Developer:
            </Text>
            <Text style={{ fontWeight: '500', fontSize: 18 }}>
              (Research Continum)
            </Text>
          </View>
        </View>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20
        }}>
          <Text style={{ fontSize: 18, marginVertical: 5, }}>
            Show Terms &amp; Condition
          </Text>
          <Text style={{ fontSize: 18, marginVertical: 5, }}>
            Show Privacy Policy
          </Text>
          <Text style={{ fontSize: 18, marginVertical: 5, }}>
            Show Third-Party Software
          </Text>
        </View>
      </View>
    </ScrollView>)
});

export const AboutStackScreen = () => {
  return (
    <AboutStackNavigator.Navigator>
      <AboutStackNavigator.Screen
      name="About"
      options={{
        headerTitleAlign: 'center',
        headerBackground: () => null,
        }}>
        {(props: any) => <About {...props} />}
      </AboutStackNavigator.Screen>
    </AboutStackNavigator.Navigator>
  );
}

export default About;
