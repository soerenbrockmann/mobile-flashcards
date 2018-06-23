import React from 'react';
import { Platform, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { purple, white } from '../utils/colors';

const BasicButton = ({ onPress, text, color }) => {
  return (
    <TouchableOpacity
      style={[
        Platform.OS === 'ios'
          ? styles.iosSubmitButton
          : styles.AndroidSubmitButton,
        {backgroundColor: !color ? purple : color }
      ]}
      onPress={onPress}
    >
      <Text style={styles.submitButtonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default BasicButton;

const styles = StyleSheet.create({
  iosSubmitButton: {
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10
  },
  AndroidSubmitButton: {
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  submitButtonText: {
    color: white,
    fontSize: 22,
    textAlign: 'center'
  }
});
