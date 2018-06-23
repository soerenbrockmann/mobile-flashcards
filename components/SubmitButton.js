import React from 'react';
import { Platform, TouchableHighlight, Text, StyleSheet } from 'react-native';
import { purple, white } from '../utils/colors';
const SubmitButton = ({ onPress, text }) => {
  return (
    <TouchableHighlight
      style={
        Platform.OS === 'ios'
          ? styles.iosSubmitButton
          : styles.AndroidSubmitButton
      }
      onPress={onPress}
    >
      <Text style={styles.submitButtonText}>{text}</Text>
    </TouchableHighlight>
  );
};

export default SubmitButton;


const styles = StyleSheet.create({
    iosSubmitButton: {
      backgroundColor: purple,
      padding: 10,
      borderRadius: 7,
      height: 45,
      marginLeft: 40,
      marginRight: 40
    },
    AndroidSubmitButton: {
      backgroundColor: purple,
      padding: 10,
      paddingLeft: 30,
      paddingRight: 30,
      height: 45,
      borderRadius: 2,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center'
    },
    submitButtonText: {
      color: white,
      fontSize: 22,
      textAlign: 'center'
    }
  });