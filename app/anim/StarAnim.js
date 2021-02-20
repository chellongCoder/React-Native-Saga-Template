import React, { useState, useEffect } from 'react';
import { Animated, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
const VALUE = height / 3;

export default StarAnim = (props) => {

    const [translateX] = useState(new Animated.Value(0));
    const [translateY] = useState(new Animated.Value(0));

    useEffect(() => {
        const x = Animated.timing(translateX, {
            toValue: -width,
            duration: 6000,
            useNativeDriver: true,
            delay: props.delay || 0
        });
        const y = Animated.timing(translateY, {
            toValue: width,
            duration: 6000,
            useNativeDriver: true,
            delay: props.delay || 0
        });

        Animated.parallel([Animated.loop(x), Animated.loop(y)]).start();
    }, [])

    return (
        <Animated.View style={[props.style, {
            transform: [{
                translateX: translateX,
            },
            {
                translateY: translateY
            }
            ]
        }]}>
            {props.children}
        </Animated.View>
    );
}
