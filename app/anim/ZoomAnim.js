import React, { useState, useEffect } from 'react';
import { Animated, Dimensions } from 'react-native';

export default ZoomAnim = (props) => {

    const [zoom] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(zoom, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
            delay: props.delay || 0
        }).start();
    }, [])

    const zoomAnim = zoom.interpolate({
        inputRange: [0, 1],
        outputRange: [0.6, 1]
    });

    return (
        <Animated.View style={[props.style, {
            transform: [{
                scale: zoomAnim,
            }]
        }]}>
            {props.children}
        </Animated.View>
    );
}
