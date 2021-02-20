import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';

export default CloudAnim = (props) => {

    const [scale] = useState(new Animated.Value(1));

    useEffect(() => {
        Animated.timing(scale, {
            toValue: 10,
            duration: 5000,
            useNativeDriver: false
        }).start();
    }, [])

    return (
        <Animated.View style={[props.style, {
            transform: [{ scale: scale }]
        }]}>
            {props.children}
        </Animated.View>
    );
}
