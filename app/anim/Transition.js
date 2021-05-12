import { Easing, Animated } from 'react-native';

module.exports = {
  navigationOptions: {
    gesturesEnabled: true,
  },
  transitionConfig: () => ({
    transitionSpec: {
      duration: 450,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;

      const width = layout.initWidth;
      const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [width, 0, 0],
      });

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [1, 1, 1],
      });

      return { opacity, transform: [{ translateX }] };
    },
  }),
};