import React, { Component } from 'react';

import { Platform, StyleSheet, View, Text, Modal, Button, TouchableOpacity } from 'react-native';

export default class Mynewproject extends Component {

  ok_Button = () => {
		const { Show_Custom_Alert } = this.props;
		Show_Custom_Alert(false);
  }

  render() {
		const { Alert_Visibility,  Show_Custom_Alert } = this.props;
    return (
      <View style={styles.MainContainer}>
        <Modal
          visible={Alert_Visibility}
          transparent={true}
          animationType={"slide"}
          onRequestClose={() => { Show_Custom_Alert(!Alert_Visibility) }} >
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.Alert_Main_View}>
              <Text style={styles.Alert_Message}>{`Trouble in login?\nCall us at `}<Text style={{ color: 'blue', textDecorationLine: 'underline' }}>510-230-0588</Text></Text>
              <View style={{ flexDirection: 'row', height: '30%' }}>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={this.ok_Button}
                  activeOpacity={0.7}
                >
                  <Text style={styles.TextStyle}> OK </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
		marginTop: (Platform.OS == 'ios') ? 20 : 0,
  },
	
  Alert_Main_View: {
		shadowColor: "#fff",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#fff",
    height: 150,
    width: '90%',
    // borderWidth: 1,
    // borderColor: '#000',
    // borderRadius: 7,
  },

  Alert_Title: {
    fontSize: 25,
    color: "#000",
    textAlign: 'center',
    padding: 10,
    height: '28%'
  },

  Alert_Message: {
    fontSize: 22,
    color: "#000",
    textAlign: 'center',
    padding: 10,
    height: '62%'
  },

  buttonStyle: {
    width: '100%',
    height: '100%',
		justifyContent: 'center',
		marginRight: 10
    // alignItems: 'center'
  },

  TextStyle: {
    color: '#000',
    textAlign: 'right',
    fontSize: 22,
    // marginTop: -5
  }

});