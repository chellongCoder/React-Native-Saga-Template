import React, { useState, useEffect } from 'react';
import { Animated, Easing } from 'react-native';

export default TextTranformAnim = (props) => {
    const [rotateY, setRotateY] = useState(new Animated.Value(0));

    useEffect(() => {
        const rotateYAnim = Animated.timing(
            rotateY,
            {
                toValue: 1,
                duration: props.duration ? props.duration : 600,
                delay: props.delay ? props.delay : 3000,
                easing: Easing.linear,
            }
        );
        Animated.loop(rotateYAnim).start();
    }, []);

    const rotateYInpolate = rotateY.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <Animated.View
            style={{ ...props.style, transform: [{ rotateY: rotateYInpolate }] }}>
            {props.children}
        </Animated.View>
    );
}
