import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';
import { Header, Left, Right, Icon } from 'native-base';
import { DrawerItems } from 'react-navigation';

class Settings extends Component {
	static navigationOption = {
		drawerIcon: ({ tintColor }) => (
		<Icon type="FontAwesome" name="home" />
			// <Icon name="settings" style={{ fontSize: 24, color: tintColor }} />
		)
	}
	render() {
		return (
			<View style={styles.container}>
				<Header>
					<Left>
						<Icon name="menu" onPress={() => this.props.navigation.openDrawer()}/>
					</Left>
				</Header>
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<Text>Settings</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Settings;
