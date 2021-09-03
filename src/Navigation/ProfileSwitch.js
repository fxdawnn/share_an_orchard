import React, {useState, useEffect, createContext, useContext} from 'react';
import auth from '@react-native-firebase/auth';
import UserProfileSetupStack from './UserSetUpProfileStack';
import UserProfileScreen from '../screens/UserProfileScreen';
import AppStack from './AppStack';
import SwitchNavigator from './SwitchNavigator';
import {AuthContext} from './AuthNavigator';

export const ProfileContext = createContext();
// This file remains to be finished for the Profile setup.

export default function ProfileSwitch() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useContext(ProfileContext);

  // Handle user state changes
  function onAuthStateChanged(result) {
    setUser(result);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const authSubscriber = auth().onAuthStateChanged(onAuthStateChanged);

    // unsubscribe on unmount
    return authSubscriber;
  }, []);

  if (initializing) {
    return null;
  }
  return profile ? (
    <AuthContext.Provider value={profile}>
      <AppStack />
    </AuthContext.Provider>
  ) : (
    <UserProfileSetupStack />
  );
}
