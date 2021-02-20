import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';

export default class RotateIntroAnim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.start();
  }

  start() {
    Animated.spring(
      this.state.value,
      {
        toValue: 1,
        duration: this.props.duration ? this.props.duration : 3000,
        useNativeDriver: false
      }
    ).start();
  }

  render() {
    const rotate = this.state.value.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    return (
      <Animated.View
        style={{ ...this.props.style, transform: [{ rotate }] }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
