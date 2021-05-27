import React, { Component } from 'react';
import { Animated } from 'react-native';

export default class BounceAnim extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: new Animated.Value(0),
		};
	}

	componentDidMount() {
		this.startAnimation();
	}

	startAnimation() {
		Animated.spring(
			this.state.value,
			{
				toValue: 2,
				duration: this.props.duration ? this.props.duration : 2000,
				useNativeDriver: false
			}
		).start();
	}

	render() {
		const marginLeft = this.state.value.interpolate({
			inputRange: [0, 1, 2],
			outputRange: [0, -50, 0],
		});
		return (
			<Animated.View
				style={{ ...this.props.style, marginLeft }}>
				{this.props.children}
			</Animated.View>
		);
	}
}
