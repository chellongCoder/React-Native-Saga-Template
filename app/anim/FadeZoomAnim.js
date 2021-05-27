import React, { Component } from 'react';
import { Animated } from 'react-native';


export default class FadeZoomAnim extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeZoomAnim: new Animated.Value(0.5),
        };
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeZoomAnim,
            {
                toValue: 1,
                duration: this.props.duration ? this.props.duration : 600,
                useNativeDriver: false
            }
        ).start();
    }

    render() {
        const fadeZoom = this.state.fadeZoomAnim;
        return (
            <Animated.View
                style={{ ...this.props.style, opacity: fadeZoom, transform: [{ scale: fadeZoom }] }}>
                {this.props.children}
            </Animated.View>
        );
    }
}
