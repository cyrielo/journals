import { makeObservable, observable, action, runInAction } from 'mobx';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER_KEY } from '../constants';
import { Alert } from 'react-native';

export default class UserStore  {
  async GoogleLogin(navigation:any) :Promise<void>{
  }

  userExist() {
    return true;
  }
};
