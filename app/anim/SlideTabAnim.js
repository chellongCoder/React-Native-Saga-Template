import React, { Component } from 'react';
import { Animated } from 'react-native';

export default class SlideTabAnim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideTabAnim: new Animated.Value(this.props.translateY || 30),
    };
  }

  componentDidMount() {
    // this.start();
  }
  

  start(){
    this.slideTabStart();
  }

  slideTabStart() {
    Animated.timing(
      this.state.slideTabAnim,
      {
        toValue: 0,
        duration: this.props.duration ? this.props.duration : 800,
        delay: this.props.delay ? this.props.delay : 0,
      }
    ).start();
  }


  render() {
    const translateY = this.state.slideTabAnim;
    return (
      <Animated.View
        style={{ ...this.props.style, transform: [{ translateY }] }}>
        {this.props.children}
      </Animated.View>
    );
  }
}
