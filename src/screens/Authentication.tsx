import React, { useState } from "react";
import {
  TouchableOpacity, View, Text, ScrollView
} from 'react-native';
import { appleAuth } from '@invertase/react-native-apple-authentication';
import ActivityIndicator from "../components/ActivityIndicator";
import ModalView from "../components/ModalView";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { UserStore } from "../store";

const socialLogins = [{
  logo: 'logo-apple',
  name: 'Apple'
}, {
  logo: 'logo-google',
  name: 'Google',
  color: '#ea4436'
}];

const AppleLogin = async () => {
  try {
    //'AppleAuth.isSupported' 
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    // get current authentication state for user
    // / This method must be tested on a real device. On the iOS simulator it always throws an error.
    const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);

    // use credentialState response to ensure the user is authenticated
    if (credentialState === appleAuth.State.AUTHORIZED) {

      // user is authenticated
    }
  } catch (error) {
    console.log('AppleLoginError', error);
  }

};

export default ({ navigation }: any) => {
  const [authState, setAuthState] = useState({
    emailOrPhone: '',
    errorMessage: null,
    loading: false,
  });

  const { loading, emailOrPhone } = authState;
  return (
    <ModalView>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{
        margin: 20,
        marginBottom: 0,
        paddingBottom: 30,
      }}>
      {loading && (
        <ActivityIndicator size={'large'} color='tomato' />
      )}
        <View style={{
          marginTop: 45,
        }}>
          {
            socialLogins.map((item, idx) => {
              if (item.name === 'Apple' && !appleAuth.isSupported) {
                return null;
              }
              return (
                <TouchableOpacity
                  key={idx}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderWidth: 0.4,
                    borderColor: 'grey',
                    borderRadius: 5,
                    marginBottom: 10,
                    padding: 15
                  }}
                  onPress={() => {
                    if (item.name === 'Apple') {
                      console.log('handle apple login ');
                      setAuthState({ ...authState });
                      AppleLogin()
                        .catch((error) => {
                          console.log('AppleError==>', error);
                        })
                    } else if (item.name === 'Google') {
                      setAuthState({ ...authState});
                      UserStore.GoogleLogin(navigation)
                        .catch((error) => {
                          console.log('GoogleError==>', error);
                          setAuthState({ ...authState });
                        });
                    }
                  }}
                >
                  <Ionicons name={item.logo} color={item.color} size={24} />
                  <Text style={{ fontSize: 17 }}>Continue with {item.name}</Text>
                  <View />
                </TouchableOpacity>
              )
            })}
        </View>
      </View>
    </ScrollView>
    </ModalView>
  );
};

