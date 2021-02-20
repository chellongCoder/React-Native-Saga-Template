import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';

export default class ActivityAnim extends Component {
    constructor(props) {
        super(props);
        this.state = {
            widthAnim: new Animated.Value(180)
        };
    }

    startActivityAnim() {
        Animated.spring(
            this.state.widthAnim,
            {
                ease: Easing.circle,
                toValue: 40,
                duration: this.props.duration ? this.props.duration : 350,
                useNativeDriver: false
            }
        ).start();
    }

    render() {
        const width = this.state.widthAnim;
        return (
            <Animated.View
                style={{ ...this.props.style, width: width }}>
                {this.props.children}
            </Animated.View>
        );
    }
}
