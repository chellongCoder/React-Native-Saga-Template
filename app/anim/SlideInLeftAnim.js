import React, { Component } from 'react';
import { Animated } from 'react-native';
import global from '../../utils/Globals';

export default class SlideInLeftAnim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideAnim: new Animated.Value(this.props.width || 200),
      opacityAnim: new Animated.Value(1),
    };
    global.slideInLeftStart = this.initSlideInLeft.bind(this);
    global.opacityOutStart = this.initOpacityOut.bind(this);
  }

  componentDidMount() {
    this.slideInLeftStart();
  }

  initSlideInLeft() {
    this.setState({
      slideAnim: new Animated.Value(this.props.width || 200),
      opacityAnim: new Animated.Value(1),
    }, () => {
      this.slideInLeftStart();
    });
  }

  initOpacityOut() {
    this.setState({
      slideAnim: new Animated.Value(0),
    }, () => {
      this.opacityOutStart();
    });
  }

  slideInLeftStart() {
    Animated.timing(
      this.state.slideAnim,
      {
        toValue: 0,
        duration: this.props.duration ? this.props.duration : 600,
        delay: this.props.delay ? this.props.delay : 100,
      }
    ).start();
  }

  opacityOutStart() {
    Animated.timing(
      this.state.slideAnim,
      {
        toValue: -this.props.width || 200,
        duration: this.props.duration ? this.props.duration : 600,
        delay: this.props.delay ? this.props.delay : 100,
      }
    ).start();
  }


  render() {
    const translateX = this.state.slideAnim;
    const opacity = this.state.opacityAnim;
    return (
      <Animated.View
        style={{ ...this.props.style, transform: [{ translateX }], opacity }}>
        {this.props.children}
      </Animated.View>
    );
  }
}
