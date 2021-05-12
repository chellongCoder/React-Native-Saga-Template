import React from 'react';
import { Animated, Dimensions } from 'react-native';
const { height } = Dimensions.get('window');
const VALUE = height / 4;

export default class JupiterAnim extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            translateY: new Animated.Value(VALUE),
            scale: new Animated.Value(0.9)
        }
        this.scaleAnimation = null;
    }

    componentDidMount() {
        // this.start(cal => {

        // });
    }


    startScale = () => {
        this.scaleAnimation = Animated.timing(this.state.scale, {
            toValue: 1,
            duration: 400,
            useNativeDriver: false
        });
        Animated.loop(this.scaleAnimation).start();
    }

    start(callBack) {
        // this.scaleAnimation.stop();
        Animated.timing(this.state.translateY, {
            toValue: -VALUE,
            duration: 2000,
        }).start(success => {
            callBack(success);
        });
    }

    render() {
        const scaleAnim = this.state.scale.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0.9]
        })
        return (
            <Animated.View style={[this.props.containerStyle, {
                transform: [{
                    translateY: this.state.translateY,
                }, {
                    scale: scaleAnim,
                }
                ]
            }]}>
                {this.props.children}
            </Animated.View>
        );
    }

}
