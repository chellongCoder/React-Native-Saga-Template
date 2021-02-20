import React, { useState } from 'react';
import { Animated, TouchableWithoutFeedback } from 'react-native';

const RippleButtonAnim = (props) => {

    const [zoomAnim, setZoom] = useState(new Animated.Value(0));

    const onPress = () => {
        Animated.timing(zoomAnim, {
            toValue: 2,
            duration: 50,
            useNativeDriver: false
        }).start(() => {
            props.onPress();
            setZoom(new Animated.Value(0));
        });
    }

    const zoomInterpolate = zoomAnim.interpolate({
        inputRange: [0, 1, 2],
        outputRange: [1, 0.85, 1],
    });
    return (
        <TouchableWithoutFeedback
            disabled={props.disabled}
            onPress={onPress}
        >
            <Animated.View style={[props.containerStyle, {
                transform: [{ scale: zoomInterpolate }]
            }]}>
                {props.children}
            </Animated.View>
        </TouchableWithoutFeedback>
    );
}

RippleButtonAnim.defaultProps = {
    onPress: () => null
}

export default RippleButtonAnim;