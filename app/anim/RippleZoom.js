import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Animated, TouchableWithoutFeedback } from 'react-native';

const { width, height } = Dimensions.get('window');
const row_width = (width - 50) / 4;

export default class RippleZoom extends Component {

    constructor(props) {
        super(props);
        this.state = {
            zoomAnim: new Animated.Value(0),
        }
        this.onPress = this.onPress.bind(this);
    }

    onPressIn = () => {
        Animated.timing(this.state.zoomAnim, {
            toValue: 1,
            duration: 650,
            useNativeDriver: false
        }).start((success) => {
        });
    }

    onPressOut = () => {
        Animated.timing(this.state.zoomAnim, {
            toValue: 0,
            duration: 0,
        }).start();
    }

    onPress = () => {
        this.props.onPress();
    }

    render() {
        const zoomAnim = this.state.zoomAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 1.14],
        });
        return (
            <TouchableWithoutFeedback
                onPressIn={this.onPressIn}
                onPressOut={this.onPressOut}
                onPress={this.onPress} >
                <Animated.View style={[this.props.containerStyle, {
                    transform: [{ scale: zoomAnim }]
                }]}>
                    {this.props.children}
                </Animated.View>
            </TouchableWithoutFeedback>
        );
    }
}

RippleZoom.defaultProps = {
    onPress: () => null
}

const styles = StyleSheet.create({
    container: {
        width: row_width,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        marginTop: 8,
        fontSize: 14,
        lineHeight: 16,
        height: 32,
        fontFamily: 'Nunito-Bold'
    },
    imageStyle: {
        borderRadius: 14
    }
});