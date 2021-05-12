import React from 'react';
import { Animated, Easing, Platform } from 'react-native'
import LottieView from 'lottie-react-native';

const SUCCESS_JSON = [
    require('./json/success.json'),
    require('./json/favourite-app-icon.json'),
    require('./json/star_editor.json'),
];

const WRONG_JSON = [
    require('./json/error.json'),
    require('./json/empty.json'),
]

export default class Success extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: new Animated.Value(0),
            rightAnswer: this.props.rightAnswer
        };
    }

    componentDidMount() {
        this.start();
    }

    start = async () => {
        Animated.timing(this.state.progress, {
            toValue: 1,
            duration: 1500,
            easing: Easing.linear,
            delay: 300,
            useNativeDriver: false
        }).start(sucesss => {
            this.props.done();
        });
    }

    getJson = () => {
        const { rightAnswer } = this.state;
        if (rightAnswer) {
            return SUCCESS_JSON[Math.floor(Math.random() * SUCCESS_JSON.length)];
        } else {
            return WRONG_JSON[Math.floor(Math.random() * WRONG_JSON.length)];
        }
    }

    shouldComponentUpdate = () => {
        if (this.props.visibleSuccess) {
            return true;
        }
        return false;
    }

    render() {
        const { rightAnswer } = this.state;
        return (
            <LottieView
                style={{
                    transform: [
                        { scale: (Platform.OS == 'ios' && !rightAnswer) ? 0.7 : 1 }
                    ]
                }}
                progress={this.state.progress}
                source={this.getJson()}
            />
        );
    }
}