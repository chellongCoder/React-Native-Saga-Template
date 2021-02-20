import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';

export default class SlideTopAnim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideAnim: new Animated.Value(200),
      opacityAnim: new Animated.Value(0.2),
    };
  }

  componentDidMount() {
    const slide = Animated.timing(
      this.state.slideAnim,
      {
        toValue: 0,
        duration: this.props.duration ? this.props.duration : 600,
        delay: this.props.delay ? this.props.delay : 100,
        easing: Easing.linear,
      }
    );
    const opacity = Animated.timing(
      this.state.opacityAnim,
      {
        toValue: 1,
        duration: 500,
      }
    );
    Animated.parallel([slide, opacity]).start();
  }

  render() {
    const translateY = this.state.slideAnim;
    const opacity = this.state.opacityAnim;
    return (
      <Animated.View
        style={{ ...this.props.style, transform: [{ translateY }], opacity }}>
        {this.props.children}
      </Animated.View>
    );
  }
}
