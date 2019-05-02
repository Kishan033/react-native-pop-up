// import React from 'react';
// import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
 
// import AwesomeAlert from 'react-native-awesome-alerts';
 
// export default class App extends React.Component {
 
//   constructor(props) {
//     super(props);
//     this.state = { showAlert: false };
//   };
 
//   showAlert = () => {
//     this.setState({
//       showAlert: true
//     });
//   };
 
//   hideAlert = () => {
//     this.setState({
//       showAlert: false
//     });
//   };
 
//   render() {
//     const {showAlert} = this.state;
 
//     return (
//       <View style={styles.container}>
 
//         <Text>I'm AwesomeAlert</Text>
//         <TouchableOpacity onPress={() => {
//           this.showAlert();
//         }}>
//           <View style={styles.button}>
//             <Text style={styles.text}>Try me!</Text>
//           </View>
//         </TouchableOpacity>
 
//         <AwesomeAlert
//           show={showAlert}
//           showProgress={false}
// 					title="AwesomeAlert"
// 					messageStyle={{
// 						color: 'red'
// 					}}
//           message="I have a message for you!"
//           closeOnTouchOutside={true}
//           closeOnHardwareBackPress={false}
//           showCancelButton={true}
//           showConfirmButton={true}
//           cancelText="No, cancel"
//           confirmText="Yes, delete it"
//           confirmButtonColor="#DD6B55"
//           onCancelPressed={() => {
//             this.hideAlert();
//           }}
//           onConfirmPressed={() => {
//             this.hideAlert();
//           }}
//         />
//       </View>
//     );
//   };
// };
 
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   button: {
//     margin: 10,
//     paddingHorizontal: 10,
//     paddingVertical: 7,
//     borderRadius: 5,
//     backgroundColor: "#AEDEF4",
//   },
//   text: {
//     color: '#fff',
//     fontSize: 15
// 	}
// });
 
import React, { Component } from 'react';
import CustomAlert from '../CustomDialog';
import {
	View,
	Text,
	StyleSheet,
	Button
} from 'react-native';
import { Dialog } from 'react-native-simple-dialogs';
import AwesomeAlert from 'react-native-awesome-alerts';

class Login extends Component {
	state={
		dialogVisible: false,
	}
	static navigationOptions = {
		drawerLabel: () => null
	}
	Show_Custom_Alert = (visible) => {
    this.setState({ dialogVisible: visible });
  }
	render() {
		return (
			<View style={styles.container}>
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<Button
						title="After login. Go to Home"
						onPress={() => this.props.navigation.navigate('Home')}
					/>
					<Button
						title="Custom Dialog"
						onPress={() => this.setState({dialogVisible: true })}
					/>
					<Text>Login Screen</Text>
					{
						this.state.dialogVisible
						&& <CustomAlert
							Alert_Visibility={this.state.dialogVisible}
							Show_Custom_Alert={this.Show_Custom_Alert}
						/>
					}
				</View>
			</View>
			// <View style={styles.container}>
			// 	<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			// 		<Button
			// 			title="After login. Go to Home"
			// 			onPress={() => this.props.navigation.navigate('Home')}
			// 		/>
			// 		<Button
			// 			title="Custom Dialog"
			// 			onPress={() => this.setState({dialogVisible: true })}
			// 		/>
			// 		<Text>Login Screen</Text>
			// 		{/* <Dialog
			// 			visible={this.state.dialogVisible}
			// 			title="Custom Dialog"
			// 			// overlayStyle={styles.dialogContent}
			// 			activityIndicatorColor="red"
			// 			onTouchOutside={() => this.setState({ dialogVisible: false })} >
			// 			<View>
			// 			<Text>Content</Text>
			// 			</View>
			// 		</Dialog> */}
			// 		{/* <AwesomeAlert
			// 			show={this.state.dialogVisible}
			// 			showProgress={false}
			// 			title="AwesomeAlert"
			// 			message="I have a message for you!"
			// 			closeOnTouchOutside={true}
			// 			closeOnHardwareBackPress={false}
			// 			showCancelButton={true}
			// 			showConfirmButton={true}
			// 			cancelText="No, cancel"
			// 			confirmText="Yes, delete it"
			// 			confirmButtonColor="#DD6B55"
			// 			onCancelPressed={() => {
			// 				this.setState({ dialogVisible: false });
			// 			}}
			// 			onConfirmPressed={() => {
			// 				this.setState({ dialogVisible: false });
			// 			}}
			// 		/> */}
					// <CustomAlert
					// 	Alert_Visibility={this.state.dialogVisible}
					// 	Show_Custom_Alert={this.Show_Custom_Alert}
					// />
			// 	</View>
			// </View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	dialogContent: {
		color: 'red'
	}
});

export default Login;
