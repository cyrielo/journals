import { makeObservable, observable, action, runInAction } from 'mobx';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class JournalStore {
  async GoogleLogin(navigation: any): Promise<void> {
  }

  userExist() {
    return true;
  }
};
