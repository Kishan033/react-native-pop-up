import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import HomeScreen from './screens/Home';
import SettingScreen from './screens/Setting';
import LoginScreen from './screens/Login';

export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator />
    );
  }
}

const { width } = Dimensions.get('window');

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ height: 150, backfaceVisibility: 'white', alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('./assets/main_icon.png')} style={{ height: 120, width: 120, borderRadius: 60 }} />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const AppDrawerNavigator = createDrawerNavigator({
  Login: LoginScreen,
  Home: HomeScreen,
  Setting: SettingScreen,
}, {
    contentComponent: CustomDrawerComponent,
    drawerWidth: width,
    contentOptions: {
      activeTintColor: 'orange',
    }
  });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
