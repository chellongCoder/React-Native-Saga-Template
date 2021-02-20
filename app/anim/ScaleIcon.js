import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';

export default class ScaleIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scaleAnim: new Animated.Value(0),
        };
    }

    start() {
        Animated.timing(
            this.state.scaleAnim,
            {
                toValue: 6,
                duration: this.props.duration ? this.props.duration : 650,
                delay: this.props.delay ? this.props.delay : 350,
                easing: Easing.linear,
                useNativeDriver: false
            }
        ).start((success) => {
            Animated.timing(
              this.state.scaleAnim,
              {
                toValue: 0,
                duration: 0,
                delay: this.props.delay ? this.props.delay : 0,
              }
            ).start();
        });
    }

    render() {
        const scale = this.state.scaleAnim.interpolate({
            inputRange: [0, 1, 2, 3, 4, 5, 6],
            outputRange: [1, 0.3, 1.1, 0.9, 1.03, 0.97, 1],
        });
        return (
            <Animated.View
                style={{ ...this.props.style, transform: [{ scale }] }}>
                {this.props.children}
            </Animated.View>
        );
    }
}
