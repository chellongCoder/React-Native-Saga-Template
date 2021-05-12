import React, { Component } from 'react';
import { Animated } from 'react-native';

export default class SlideInBottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideAnim: new Animated.Value(this.props.width || 200),
    };
  }

  componentDidMount() {
    this.start();
  }


  start() {
    this.slideLeftStart();
  }

  slideLeftStart() {
    Animated.timing(
      this.state.slideAnim,
      {
        toValue: this.props.toValue || 0,
        duration: this.props.duration ? this.props.duration : 600,
        delay: this.props.delay ? this.props.delay : 100,
        useNativeDriver: true
      }
    ).start();
  }


  render() {
    const translateY = this.state.slideAnim;
    return (
      <Animated.View
        style={{ ...this.props.style, transform: [{ translateY }] }}>
        {this.props.children}
      </Animated.View>
    );
  }
}
