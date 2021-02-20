import React, { Component } from 'react';
import { Animated } from 'react-native';

export default class BlinkAnim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0)
    };
  }

  componentDidMount() {
    const anim = Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: this.props.duration ? this.props.duration : 1000,
        useNativeDriver: false
      }
    );
    Animated.loop(anim).start();
  }

  render() {
    const opacity = this.state.fadeAnim;
    return (
      <Animated.View
        style={{ ...this.props.style, opacity }}>
        {this.props.children}
      </Animated.View>
    );
  }
}
