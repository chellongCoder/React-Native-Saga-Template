import { CommonActions, NavigationContainerRef, StackActions } from '@react-navigation/native';
let _navigator: any;

function getTopLevelNavigator() {
  return _navigator;
}

function setTopLevelNavigator(navigatorRef: any) {
  _navigator = navigatorRef;
}

function navigate(routeName: string, params: any) {
  _navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params: params,
    }),
  );
}

function goBack() {
  _navigator.dispatch(CommonActions.goBack());
}

function replace(routeName: string, params: { [key: string]: any }) {
  _navigator?.dispatch(StackActions.replace(routeName, params));
}

// add other navigation functions that you need and export them

export default {
  navigate,
  goBack,
  setTopLevelNavigator,
  _navigator,
  getTopLevelNavigator,
  replace,
};
