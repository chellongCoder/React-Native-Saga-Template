/* eslint-disable react-hooks/exhaustive-deps */
import { NavigationContainer } from '@react-navigation/native';
import { Root } from 'native-base';
import React, { Suspense, useEffect } from 'react';
import { Platform, StyleSheet } from 'react-native';
import codePush from 'react-native-code-push';
import DropdownAlert from 'react-native-dropdownalert';
import 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
import { enableScreens } from 'react-native-screens';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import LoadingGlobalProvider from './tools/loading-global';
import { DropDownHolder } from './components';
import { theme } from './theme';
import { store } from './redux/store/index';
import navigationService from './navigation/navigation-service';
import BottomSheetProvider from './tools/bottom-sheet';
import ImageViewProvider from './tools/image-view';
import ToastInfoProvider from './tools/toast-info';
import NetworkProvider from './tools/network';
import ModalProvider from './tools/modal';
import { AppNavigator } from './navigation';
import BackgroundProvider from './tools/background';
import DatePickerProvider from './tools/date-picker';

enableScreens();

const App = () => {
  useEffect(() => {
    sync();
    console.disableYellowBox = true;
    if (Platform.OS == 'android') {
      SplashScreen.hide();
    }
  }, []);

  const sync = () => {
    codePush.sync({}, codePushStatusDidChange, codePushDownloadDidProgress);
  };

  const codePushStatusDidChange = (syncStatus: any) => {
    switch (syncStatus) {
      case codePush.SyncStatus.CHECKING_FOR_UPDATE:
        console.log('Checking for update.');
        break;
      case codePush.SyncStatus.DOWNLOADING_PACKAGE:
        console.log('Downloading package.');
        break;
      case codePush.SyncStatus.AWAITING_USER_ACTION:
        console.log('Awaiting user action.');
        break;
      case codePush.SyncStatus.INSTALLING_UPDATE:
        console.log('Installing update.');
        break;
      case codePush.SyncStatus.UP_TO_DATE:
        SplashScreen.hide();
        console.log('App up to date.');
        break;
      case codePush.SyncStatus.UPDATE_IGNORED:
        console.log('Update cancelled by user.');
        break;
      case codePush.SyncStatus.UPDATE_INSTALLED:
        console.log('Update installed and will be applied on restart.');
        break;
      case codePush.SyncStatus.UNKNOWN_ERROR:
        console.log('An unknown error occurred.');
        break;
      case 4:
        SplashScreen.hide();
        break;
    }
  };

  const codePushDownloadDidProgress = (progress: any) => {
    console.log('progress', progress);
  };

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Suspense fallback={null}>
          <Root>
            <PaperProvider>
              <DatePickerProvider>
                <BackgroundProvider>
                  <SafeAreaView edges={['top']} style={styles.container}>
                    <LoadingGlobalProvider>
                      <NetworkProvider>
                        <ToastInfoProvider>
                          <ImageViewProvider>
                            <BottomSheetProvider>
                              <ModalProvider>
                                <NavigationContainer ref={navigationService.setTopLevelNavigator} theme={theme}>
                                  <AppNavigator />
                                  <DropdownAlert ref={(ref) => DropDownHolder.setDropDown(ref)} />
                                </NavigationContainer>
                              </ModalProvider>
                            </BottomSheetProvider>
                          </ImageViewProvider>
                        </ToastInfoProvider>
                      </NetworkProvider>
                    </LoadingGlobalProvider>
                  </SafeAreaView>
                </BackgroundProvider>
              </DatePickerProvider>
            </PaperProvider>
          </Root>
        </Suspense>
      </Provider>
    </SafeAreaProvider>
  );
};

const codePushOptions = {
  updateDialog: true,
  installMode: codePush.InstallMode.IMMEDIATE,
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
};

export default codePush(codePushOptions)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
