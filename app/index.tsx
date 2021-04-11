import { NavigationContainer } from '@react-navigation/native';
import { Root } from 'native-base';
import React, { Suspense, useEffect } from 'react';
import { Platform, SafeAreaView, StyleSheet } from 'react-native';
import codePush from 'react-native-code-push';
import DropdownAlert from 'react-native-dropdownalert';
import 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
import { enableScreens } from 'react-native-screens';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoadingGlobalProvider from './tools/loading-global';
import { DropDownHolder, PushNotification } from './components';
import AppNavigator from './navigation/root-stack';
import { theme } from './theme';
import { store } from './redux/store/index';
import navigationService from './navigation/navigation-service';
import BottomSheetProvider from './tools/bottom-sheet';

enableScreens();

const App = () => {
  useEffect(() => {
    console.disableYellowBox = true;
    if (Platform.OS == 'android') {
      SplashScreen.hide();
    }
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Suspense fallback={null}>
          <Root>
            <SafeAreaView style={styles.container}>
              <LoadingGlobalProvider>
                <BottomSheetProvider>
                  <PaperProvider>
                    <NavigationContainer ref={navigationService.setTopLevelNavigator} theme={theme}>
                      <AppNavigator />
                      <PushNotification />
                      <DropdownAlert ref={(ref) => DropDownHolder.setDropDown(ref)} />
                    </NavigationContainer>
                  </PaperProvider>
                </BottomSheetProvider>
              </LoadingGlobalProvider>
            </SafeAreaView>
          </Root>
        </Suspense>
      </Provider>
    </SafeAreaProvider>
  );
};

const codePushOptions = {
  updateDialog: true,
  installMode: codePush.InstallMode.IMMEDIATE,
};

export default codePush(codePushOptions)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
