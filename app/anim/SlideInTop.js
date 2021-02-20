import React, { Component } from 'react';
import { Animated } from 'react-native';

export default class SlideInTopAnim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideAnim: new Animated.Value(this.props.width || -200),
    };
  }

  componentDidMount() {
    this.slideLeftStart();
  }

  slideLeftStart() {
    Animated.timing(
      this.state.slideAnim,
      {
        toValue: 0,
        duration: this.props.duration ? this.props.duration : 600,
        delay: this.props.delay ? this.props.delay : 100,
      }
    ).start(() => {
      this.setState({ slideAnim: new Animated.Value(this.props.width || -200) })
    });
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
