import React, {useState, useEffect, createContext} from 'react';
import auth from '@react-native-firebase/auth';
import SignInStack from './SignInStack';
import SignOutStack from './SignOutStack';
import SwitchNavigator from './SwitchNavigator';
import AppStack from './AppStack';
import socket from '../Store/socket';

export const AuthContext = createContext(null);

export default function AuthNavigator() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  // Handle user state changes
  function onAuthStateChanged(result) {
    setUser(result);
    if (result) {
      socket.emit('user setup', result);
    }
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const authSubscriber = auth().onAuthStateChanged(onAuthStateChanged);
    socket.on('user return', (msg) => {
      setUser(msg);
    });
    // unsubscribe on unmount
    return authSubscriber;
  }, []);

  if (initializing) {
    return null;
  }

  return user ? (
    <AuthContext.Provider value={user}>
      <AppStack />
    </AuthContext.Provider>
  ) : (
    <SwitchNavigator />
  );
}
