import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';

export default class RotateAnim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: new Animated.Value(0),
    };
  }

  componentDidMount() {
    const loop = this.props.loop ? true : false;
    const anim = Animated.timing(
      this.state.value,
      {
        toValue: 1,
        duration: this.props.duration ? this.props.duration : 3000,
        easing: Easing.linear,
        useNativeDriver: false
      }
    );
    loop ? Animated.loop(anim).start() : anim.start();
  }

  render() {
    const rotate = this.state.value.interpolate({
      inputRange: [0, 10],
      outputRange: ['0deg', '3600deg'],
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
