import AsyncStorage from '@react-native-community/async-storage';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import firebase from 'react-native-firebase';
// import { Network } from '../../components';
import { NetworkContext } from './context';
import { NetworkContextValue, NetworkProps } from './types';

const NetworkProvider = ({ children }: NetworkProps) => {
  const getToken = async () => {
    var fcm_token = await firebase.messaging().getToken();
    console.log(`🛠 LOG: 🚀 --> ----------------------------------------------------------------------------`);
    console.log(`🛠 LOG: 🚀 --> ~ file: index.tsx ~ line 11 ~ getToken ~ fcm_token`, fcm_token);
    console.log(`🛠 LOG: 🚀 --> ----------------------------------------------------------------------------`);
    await AsyncStorage.setItem('@fcm_token', fcm_token);
  };

  const requestPermission = useCallback(async () => {
    try {
      await firebase.messaging().requestPermission();
      // User has authorized
      getToken();
    } catch (error) {
      console.log(`🛠 LOG: 🚀 --> -----------------------------------------------------------------------------`);
      console.log(`🛠 LOG: 🚀 --> ~ file: index.tsx ~ line 23 ~ requestPermission ~ error`, error);
      console.log(`🛠 LOG: 🚀 --> -----------------------------------------------------------------------------`);
      // User has rejected permissions
    }
  }, []);

  const checkPermission = useCallback(async () => {
    const enabled = await firebase.messaging().hasPermission();
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

  const createNotificationListeners = async () => {
    /*
     * Triggered when a particular notification has been received in foreground
     * */
    firebase.notifications().onNotification((notification) => {
      console.log(
        `🛠 LOG: 🚀 --> ------------------------------------------------------------------------------------------------`,
      );
      console.log(`🛠 LOG: 🚀 --> ~ file: index.tsx ~ line 49 ~ firebase.notifications ~ notification`, notification);
      console.log(
        `🛠 LOG: 🚀 --> ------------------------------------------------------------------------------------------------`,
      );
      const { title, body } = notification;
      console.log(title, body);
      const showNotification = new firebase.notifications.Notification()
        .setNotificationId(notification.notificationId)
        .setTitle(notification.title)
        .setBody(notification.body)
        .setData(notification.data);
      showNotification.android.setChannelId('iWish');
      firebase.notifications().displayNotification(showNotification);
    });
    /*
     * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
     * */
    firebase.notifications().onNotificationOpened((notificationOpen) => {
      const { title, body, data } = notificationOpen.notification;
      console.log(title, body, data);
    });
    /*
     * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
     * */
    const notificationOpen = await firebase.notifications().getInitialNotification();
    if (notificationOpen) {
      const { title, body, data } = notificationOpen.notification;
      console.log(title, body, data);
    }
    /*
     * Triggered for data only payload in foreground
     * */
    firebase.messaging().onMessage((message) => {
      //process data message
      console.log(message);
    });
  };

  useEffect(() => {
    // checkPermission();
    // createNotificationListeners();
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
