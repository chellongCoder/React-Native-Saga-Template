import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { withTheme } from 'react-native-paper';

const LoginScreen = withTheme(() => {
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
});

export default LoginScreen;

const styles = StyleSheet.create({});
