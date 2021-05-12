import React, { Component } from 'react';
import { Animated } from 'react-native';


export default class FadeAnim extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fadeAnim: new Animated.Value(this.props.hiden ? 1 : 0),
		};
	}

	componentDidMount() {
		Animated.timing(
			this.state.fadeAnim,
			{
				toValue: this.props.hiden ? 0 : 1,
				duration: this.props.duration ? this.props.duration : 600,
				useNativeDriver: false
			}
		).start();
	}

	render() {
		const opacity = this.state.fadeAnim;
		return (
			<Animated.View
				style={{ ...this.props.style, opacity }}>
				{this.props.children}
			</Animated.View>
		);
	}
}
