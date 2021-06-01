import AsyncStorage from '@react-native-community/async-storage';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';
import { NetworkContext } from './context';
import { NetworkContextValue, NetworkProps } from './types';

const NetworkProvider = ({ children }: NetworkProps) => {
  const getToken = async () => {
    var fcm_token = await messaging().getToken();
    console.log(`🛠 LOG: 🚀 --> ----------------------------------------------------------------------------`);
    console.log(`🛠 LOG: 🚀 --> ~ file: index.tsx ~ line 11 ~ getToken ~ fcm_token`, fcm_token);
    console.log(`🛠 LOG: 🚀 --> ----------------------------------------------------------------------------`);
    await AsyncStorage.setItem('@fcm_token', fcm_token);
  };

  const requestPermission = useCallback(async () => {
    try {
      const authStatus = await messaging().requestPermission();
      // User has authorized
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
      if (enabled) {
        getToken();
      }
    } catch (error) {
      console.log(`🛠 LOG: 🚀 --> -----------------------------------------------------------------------------`);
      console.log(`🛠 LOG: 🚀 --> ~ file: index.tsx ~ line 23 ~ requestPermission ~ error`, error);
      console.log(`🛠 LOG: 🚀 --> -----------------------------------------------------------------------------`);
      // User has rejected permissions
    }
  }, []);

  const checkPermission = useCallback(async () => {
    const enabled = await messaging().hasPermission();
    console.log(`🛠 LOG: 🚀 --> -------------------------------------------------------------------------------`);
    console.log(`🛠 LOG: 🚀 --> ~ file: index.tsx ~ line 29 ~ checkPermission ~ enabled`, enabled);
    console.log(`🛠 LOG: 🚀 --> -------------------------------------------------------------------------------`);
    let fcm_token = await AsyncStorage.getItem('@fcm_token');
    if (enabled && !fcm_token) {
      getToken();
    } else {
      requestPermission();
    }
  }, [requestPermission]);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      console.log(
        `🛠 LOG: 🚀 --> ---------------------------------------------------------------------------------------`,
      );
      console.log(`🛠 LOG: 🚀 --> ~ file: index.tsx ~ line 52 ~ unsubscribe ~ remoteMessage`, remoteMessage);
      console.log(
        `🛠 LOG: 🚀 --> ---------------------------------------------------------------------------------------`,
      );
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    checkPermission();
  }, [checkPermission]);

  const contextValue = useMemo<NetworkContextValue>(() => ({}), []);
  return (
    <>
      <NetworkContext.Provider value={contextValue}>{children}</NetworkContext.Provider>
      {/* {<Network />} */}
    </>
  );
};

export default NetworkProvider;
