import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';

export default class CircleEffect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            widthAnim: new Animated.Value(150),
        };
    }

    componentDidMount() {
        this.circleEffectStart();
    }

    circleEffectStart() {
        let anim = Animated.timing(
            this.state.widthAnim,
            {
                toValue: 160,
                duration: this.props.duration ? this.props.duration : 600,
                delay: this.props.delay ? this.props.delay : 100,
                useNativeDriver: false
            }
        );
        Animated.loop(anim).start();
    }

    render() {
        const widthAnim = this.state.widthAnim;
        return (
            <Animated.View
                style={{ ...this.props.style, width: widthAnim, height: widthAnim, borderRadius: widthAnim / 2 }}>
                {this.props.children}
            </Animated.View>
        )
    }
}