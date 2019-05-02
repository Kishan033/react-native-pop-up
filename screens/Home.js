import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';
import { Header, Left, Right, Icon } from 'native-base';
import { DrawerItems } from 'react-navigation';

class Home extends Component {
	static navigationOption = {
		drawerIcon: ({ tintColor }) => (
			<Icon name= "menu" style={{ fontSize: 24, color: tintColor }} />
		)
	}
	render() {
		return (
			<View style={styles.container}>
				<Header style={{ justifyContent: 'center', backgroundColor: 'green' }}>
					{/* <Left style={{ backgroundColor: 'red' }}> */}
						<Icon name="menu" onPress={() => this.props.navigation.openDrawer()}/>
					{/* </Left> */}
				</Header>
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<Text>HOME</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Home;
