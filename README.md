<div align="center">
    <img src="https://images.viblo.asia/31560351-9c10-41b8-8f3e-6a641ac9e0d9.png" alt="Logo" width="100%">
</div>

[![Release Date](https://img.shields.io/badge/Release%20Date-May%202020-green.svg)](https://shields.io/)
[![Version](https://img.shields.io/badge/Version-v1.0.0-green.svg)](https://shields.io/)
[![TypeScript Support](https://img.shields.io/badge/Typescript%20Support-Yes-green.svg)](https://shields.io/)
[![Dark Theme Setup](https://img.shields.io/badge/Dark%20Theme-Yes-green.svg)](https://shields.io/)
[![Firebase](https://img.shields.io/badge/Firebase-Yes-green.svg)](https://shields.io/)
[![Code-Push Integrated](https://img.shields.io/badge/CodePush%20Integrated-Yes-green.svg)](https://shields.io/)
[![Push Notifications](https://img.shields.io/badge/PushNotifications%20Integrated-Yes-green.svg)](https://shields.io/)
[![Redux](https://img.shields.io/badge/Redux-Yes-green.svg)](https://shields.io/)
[![Offline Storage](https://img.shields.io/badge/Data%20Persist-Yes-green.svg)](https://shields.io/)
[![Splash Screen](https://img.shields.io/badge/Splash%20Screen-Yes-green.svg)](https://shields.io/)
[![Multilingual Support](https://img.shields.io/badge/Multilingual%20Support-Yes-green.svg)](https://shields.io/)
[![Maintained](https://img.shields.io/badge/Maintained%3F-Yes-green.svg)](https://shields.io/)

# Base project

Project là 1 [React Native](https://facebook.github.io/react-native/) boilerplate giúp khởi động 1 dự án react native 1 cách nhanh nhất 

Project cung cấp **1 Kiến trúc phát triển mobile đa nền tảng** Phân tách tầng UI và tầng Logic. Dưới đây là những ghi chú để có thể sử dụng project 1 cách hiệu quả nhất.


## Kiến trúc

Mục tiêu chính của kiến trúc là phân tách các phần của project.

- phân tách giữa **components** và **screens**.

- **State** được quản lý qua [Redux](https://redux.js.org/) stores.

- các logic khác của ứng dụng (API calls, etc.) được phân tách khỏi **UI** và **state** thông qua [Redux Saga](https://redux-saga.js.org/).

## Các thư viện liên qua

gồm có:

- [React Native](https://facebook.github.io/react-native/) (v**0.62.3**)
- [Clear directory layout](#directory-layout) cung cấp 1 tổ chức code ổn định để phát triển ứng dụng
- [Redux](https://redux.js.org/) (v4.0.5) để quản lý state
- [Redux Persist](https://github.com/rt2zz/redux-persist) (v6.0.0) để quản lý lưu trữ state
- [Redux Sagas](https://redux-saga.js.org) (v1.1.3)để phân tách logic tầng UI và tầng Business
- [React Navigation 5](https://reactnavigation.org/) với [`NavigationService`](App/Navigation/NavigationService.js) để thực thi luồng màn hình.
- [i18Next](https://www.i18next.com/) (v11.3.5) to facilitate the more than one language in the App
đa ngôn ngữ 
- [Firebase](https://rnfirebase.io/) (v5.6.0)
- [Push Notifications](https://rnfirebase.io/messaging/usage) được tích hợp ở project này
- [Code-Push](https://github.com/Microsoft/react-native-code-push) (v6.2.0) cung cấp phân phối code cho dev và test 1 cách nhanh chóng
- [react-native-fbsdk](https://github.com/facebook/react-native-fbsdk) (v2.0.0) tích hợp đăng nhập fb
- [google-signin](https://github.com/react-native-community/google-signin) (v4.0.0) tích hợp đăng nhập google
- [Theme Support](https://callstack.github.io/react-native-paper/theming.html) với [`DarkTheme`](App/Utils/DarkTheme.js) và [`LightTheme`](App/Utils/LightTheme.js)
- [react-native-splash-screen](https://github.com/crazycodeboy/react-native-splash-screen) (v3.2.0) 
- [axios](https://github.com/axios/axios) call api (v0.19.2)
- [TypeScript](https://www.typescriptlang.org/)
- [prettier](https://prettier.io/) and [eslint](https://eslint.org/) pre configured for React Native

**Note:** ...

## Directory layout

- [`app/components`](app/components): các component đang được sử dụng
- [`app/screens`](app/screens): các màn hình
- [`app/assets`](app/assets): Các assets được sử dụng project (ảnh, font chữ, video, audio ...)
- [`app/i18next`](app/i18next): quản lý ngôn ngữ
- [`app/navigation`](app/navigation): React-Navigation setting
- [`app/redux/store`](app/redux/store): Redux store quản lý state
- [`app/redux/sagas`](app/redux/saga): Redux sagas quản lý logic api
- [`app/redux/actions`](app/redux/action): Redux actions
- [`app/redux/reducers`](app/redux/reducers): Redux reducers
- [`app/redux/connects`](app/redux/connects): Redux data connectors
- [`app/redux/types`](app/redux/types): Redux action types
- [`app/redux/api`](app/redux/api): application services, e.g. API clients
- [`app/Utils`](app/Utils): Styles helpers for the application
- [`app/config`](app/config): Routes and Screen configurations
- [`app/constants`](app/constants): Colors, images and common styles
- [`app/helpers`](app/helpers): Colors, images and common styles

## Yêu cầu

Môi trường node 8 hoặc cao hơn. Yêu cầu Xcode 10 trở lên

Cài đặt môi trường để phát triển ứng dụng cross platform 

- Dành cho [Android development](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies-3)
- Dành cho [iOS development](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies)

## Các sử dụng base project

Để tạo 1 project mới sử dụng base:

- Clone Project
- Xoá git: `rm -rf .git/`
- Install thư viện `yarn` or `npm install`
- ##### Rename the React Native project (Without custom Bundle Identifier)
  `yarn run rename -- <YourProjectName>` or `npm run rename -- <YourProjectName>` (the default name is `BaseProject`)
- ##### Đổi tên project (với Bundle Identifier, chỉ trên Android. với  iOS, dùng Xcode)
  `yarn run rename -- <YourProjectName> -b <bundleIdentifier>` or `npm run rename -- <YourProjectName> -b <bundleIdentifier>` (the default name is `BaseProject`)
- ##### [Facebook SDK Android/iOS Setup](https://github.com/facebook/react-native-fbsdk)
  Chỉ cần cung cấp `FacebookAppID` và `FacebookLoginProtocolScheme` rồi vất vào .env.staging và .env.production.
  <div align="center">
    <img src="https://i.gyazo.com/bff89899fafe0069f4500b7956aec88c.png" alt="Logo" width="100%">
  </div>

- ##### [Google Sign-In SDK Android Setup](https://github.com/react-native-community/google-signin/blob/master/docs/android-guide.md)
  Để bắn noti cho android và login bằng google hãy import `google-services.json` into `android/app` 
- ##### [Google Sign-In SDK iOS Setup](https://github.com/react-native-community/google-signin/blob/master/docs/ios-guide.md)
  Để bắn noti cho ios và login bằng google hãy import `GoogleService-Info.plist` vào project trong xcode và lấy `REVERSED_CLIENT_ID` trong `GoogleService-Info.plist` để vào `.env.staging` và `.env.production`
  <div align="center">
    <img src="https://i.gyazo.com/638f5eb0822acd3cea86e110d9940a5f.png" alt="Logo" width="100%">
  </div>
- ##### [Push Notifications](https://github.com/react-native-community/google-signin/blob/master/docs/android-guide.md)
  Tải 2 file này về vất và firebase 
  <div align="center">
    <img src="https://i.gyazo.com/3a8dbb37f7b4c61a9c95c02ed5b57b09.png" alt="Logo" width="100%">
  </div>
  <div align="center">
    <img src="https://i.gyazo.com/66a4ec2945251282ab24adb643b7e965.png" alt="Logo" width="100%">
  </div>


  
- ##### [Optional][codepush android setup](https://github.com/microsoft/react-native-code-push/blob/master/docs/setup-android.md)
  Setup code-push cho phát triển ứng dụng [Tạo trên appcenter với os="Android" and platform="React Native" ](https://appcenter.ms/) . Sau khi tạo xong app sẽ có secret key, vất nó vào  `android/app/src/main/assets/appcenter-config.json`. Kích vào `Distribute` ở side menu trong appcenter, click code push, nó sẽ tạo cho 2 key là production và staging. vất key production vào `.env.production` vất key staging vào `.env.staging` 
- ##### [Optional][codepush ios setup](https://github.com/microsoft/react-native-code-push/blob/master/docs/setup-ios.md)

  Setup code-push cho phát triển ứng dụng [Tạo trên appcenter với os="iOS" and platform="React Native" ](https://appcenter.ms/) . Sau khi tạo xong app sẽ có secret key, vất nó vào `AppCenter-Config.plist`. Kích vào `Distribute` ở side menu trong appcenter, click code push, nó sẽ tạo cho 2 key là production và staging. vất key production vào `.env.production` vất key staging vào `.env.staging` 

Commit đầu tiên lên git bằng cách git init > commit > push 

## Running the project

- `yarn` or `npm install` 
- Run the following steps for your platform

### Android

- đầu tiên để chạy android, phải generate debug.key:
  - `cd android/app`
  - `keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000`
  - `cd ../..` quay về root folder
- `yarn start` or `npm install` để start bundle
- `yarn run android` or `npm run android` Để start android app (Nhớ cắm đt hoặc chạy máy ảo)

### iOS

- `cd ios`
- `pod install` để kéo dependencies
- `cd ..` quay về root folder
- `react-native run-ios` Để start ios app (Nhớ cắm đt hoặc chạy máy ảo)


## Useful documentation

### [CodePush](https://microsoft.github.io/code-push/)

CodePush is an App Center cloud service that enables Apache Cordova and React Native developers to deploy mobile app updates directly to their users’ devices.

### [Google Sign-In SDK](https://github.com/react-native-community/google-signin)

Google Sign-In is a secure authentication system that reduces the burden of login for your users, by enabling them to sign in with their Google Account—the same account they already use with Gmail, Play, and other Google services.

### [Facebook SDK](https://github.com/facebook/react-native-fbsdk)

The Facebook SDK for is the easiest way to integrate your app with Facebook. It enables:

- `Facebook Analytics` - Understand how people are using your product.
- `Facebook Login` - Authenticate people with their Facebook credentials.
- `Share and Send dialogs` - Enable sharing content from your app to Facebook.
- `App Events` - Log events in your application.
- `Graph API` - Read and write to Graph API.

### [I18next](https://www.i18next.com/)

I18next is an internationalization-framework written in and for JavaScript. But it's much more than that.

i18next goes beyond just providing the standard i18n features such as (plurals, context, interpolation, format). It provides you with a complete solution to localize your product from web to mobile and desktop.

### [Firebase-crashlytics](https://firebase.google.com/docs/crashlytics/get-started)
[![Firebase-crashlytics](https://www.gstatic.com/mobilesdk/190618_mobilesdk/crashlytics_fore@2x.png)](https://www.youtube.com/watch?v=k_mdNRZzd30)


## License

This project is released under the [MIT License](LICENSE).

## Why this boilerplate?

I looked into existing boilerplates before starting this project, and while many of them are awesome, But every boilerplate was lacking something, so I come up with a boilerplate that has all the features that modern app needed. For example

- `React Native Latest Stable Version (v0.62.3)`
- `Great Architecture`
- `React Navigation 5 Integrated`
- `Redux Integrated`
- `Redux Saga Integrated`
- `Redux Persist Integrated`
- `Firebase SDK Integrated`
- `Facebook SDK Integrated`
- `Google Sign-in SDK Integrated`
- `Code-Push SDK Integrated`
- `Push Notifications Integratd`
- `Theme Integrated`
- `Multilingual Integrated`
- `Splash Screen Integrated`
- `Vector Icons Integrated`
- `TypeScript Support`
