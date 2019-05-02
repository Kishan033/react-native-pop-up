import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableHighlight,
	Image,
	Alert,
	KeyboardAvoidingView,
	ScrollView,
} from 'react-native';
import { connect } from 'react-redux'
import Hr from 'react-native-hr-component';
import LinearGradient from 'react-native-linear-gradient';
import OfflineNotice from './OfflineNotice';
import { SignInUser } from '../actions/user';
import { AsyncStorage } from 'react-native';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			isLogin: false,
			error: false,
			isLoading: false,
			isConnected: true,
			enableTouchIdOnSuccess: false,
		}

		this.focusNextField = this.focusNextField.bind(this);
		this.input = {};
	}

	focusNextField(id) {
		this.input[id].focus();
	}

	login = (e) => {
		e.preventDefault();
		const { email, password, enableTouchIdOnSuccess } = this.state;
		let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (email == '' || password == '') {
			Alert.alert('Email/Password cannot be empty');
			return false;
		} else if (reg.test(email) === false) {
			Alert.alert('Email is not correct');
			return false;
		} else if (password.length < 8) {
			Alert.alert('Password must have more than 8 characters');
			return false;
		} else {

			this.props.SignInUser(email, password).then(async (resp) => {
				await AsyncStorage.setItem('userToken', resp);
				Alert.alert('Login Success');
				this.setState({ isLogin: true });
				// console.log(resp.data);
				this.props.navigation.navigate('HomeScreen');
			}).catch((error) => {
				Alert.alert('Login Failed');
			})
		}
	}

	render() {
		return (
			<LinearGradient colors={['#FFF', '#4de19d', '#75b1fc']} style={styles.linearGradient}>
				<OfflineNotice connected={this.state.isConnected} />
				<View style={{ flex: 1 }}>
					<ScrollView contentContainerStyle={styles.container}>
						<Image style={{ width: 140, height: 80, marginBottom: 50 }} source={require('../../assets/pverify.png')} />
						<KeyboardAvoidingView>
							<View style={styles.inputContainer}>
								<TextInput style={styles.inputs}
									placeholder="Email"
									autoCorrect={false}
									keyboardType="email-address"
									underlineColorAndroid='transparent'
									onChangeText={(email) => this.setState({ email })}
									blurOnSubmit={false}
									onSubmitEditing={() => {
										this.focusNextField('password');
									}}
									returnKeyType={'next'}
									ref={input => {
										this.input['email'] = input;
									}}
								/>
							</View>
							<View style={styles.inputContainer}>
								<TextInput style={styles.inputs}
									placeholder="Password"
									secureTextEntry={true}
									underlineColorAndroid='transparent'
									onChangeText={(password) => this.setState({ password })}
									blurOnSubmit={true}
									returnKeyType={'done'}
									ref={input => {
										this.input['password'] = input;
									}}
								/>
							</View>
						</KeyboardAvoidingView>
						<TouchableHighlight
							style={[styles.buttonContainer, styles.loginButton]}
							onPress={this.login}>
							<Text style={styles.ButtonText}>LOG IN</Text>
						</TouchableHighlight>
						<Text style={styles.linkText} onPress={() => this.props.navigation.navigate('SignUpScreen')}>SIGN UP</Text>
						<Hr text="OR CONTINUE WITH" width={1} style={{ marginTop: 35, marginBottom: 25 }} />
						<View style={styles.socialContainer}>
							<TouchableHighlight style={[styles.buttonContainer, styles.socialButtonContainer]}>
								<Text style={styles.socialText}>Google</Text>
							</TouchableHighlight>
							<TouchableHighlight style={[styles.buttonContainer, styles.socialButtonContainer]}>
								<Text style={styles.socialText}>Facebook</Text>
							</TouchableHighlight>

						</View>
					</ScrollView>
				</View>
			</LinearGradient>
		);
	}
}

const styles = StyleSheet.create({

	linearGradient: {
		flex: 1,
		paddingLeft: '15%',
		paddingRight: '15%',
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	inputContainer: {
		borderBottomColor: 'black',
		borderBottomWidth: 1,
		width: '90%',
		height: 45,
		marginBottom: 20,
		flexDirection: 'row',
		alignItems: 'center'
	},

	inputs: {
		height: 45,
		marginLeft: 16,
		borderBottomColor: 'black',
		fontSize: 20,
		flex: 1,
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'black',
		paddingBottom: 10,
		marginBottom: 40,
	},
	buttonContainer: {
		height: "7%",
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
		width: "80%",
		borderRadius: 30,
		borderWidth: 1,
		borderColor: "#2e3192",
	},
	socialContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	socialButtonContainer: {
		flex: 1,
		marginLeft: 10,
		justifyContent: 'center',
		alignItems: 'center',
		height: '40%',
		width: "40%",
		borderRadius: 30,
		borderWidth: 1,
		borderColor: "#2e3192",

	},
	loginButton: {
		backgroundColor: "#2e3192",
	},
	ButtonText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 20,
	},
	socialText: {
		color: "#2e3192",
		fontWeight: 'bold',
	},
	linearGradient: {
		flex: 1,
		paddingLeft: 15,
		paddingRight: 15,
		borderRadius: 5
	},
	linkText: {
		color: '#2e3192',
		fontWeight: 'bold',
		fontSize: 20,
	},
});

export const mapStateToProps = state => state;
export default connect(mapStateToProps, { SignInUser })(Login);
