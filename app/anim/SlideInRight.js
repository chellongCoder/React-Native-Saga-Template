import React, { Component } from 'react';
import { Animated } from 'react-native';
import global from '../../utils/Globals';

export default class SlideInRightAnim extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideAnim: new Animated.Value(this.props.width || 200),
        };
    }

    componentDidMount() {
        // this.start();
    }
    
    start() {
        this.setState({
            slideAnim: new Animated.Value(this.props.width || 200),
            opacityAnim: new Animated.Value(1),
        }, () => {
            this.slideInLeftStart();
        });
    }

    slideInLeftStart() {
        Animated.timing(
            this.state.slideAnim,
            {
                toValue: 0,
                duration: this.props.duration ? this.props.duration : 350,
                delay: this.props.delay ? this.props.delay : 100,
            }
        ).start();
    }


    render() {
        const translateX = this.state.slideAnim;
        return (
            <Animated.View
                style={{ ...this.props.style, transform: [{ translateX }] }}>
                {this.props.children}
            </Animated.View>
        );
    }
}
