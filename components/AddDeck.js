import React, { Component } from 'react';
import {
  Platform,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';
import { purple, white } from '../utils/colors';
import { saveDeckTitle } from '../utils/api';

const SubmitButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={
        Platform.OS === 'ios'
          ? styles.iosSubmitButton
          : styles.AndroidSubmitButton
      }
      onPress={onPress}
    >
      <Text style={styles.submitButtonText}>Submit</Text>
    </TouchableOpacity>
  );
};

class AddDeck extends Component {
  state = {
    input: '',
  };

  handleTextChange = input => {
    this.setState(() => ({ input }));
  };

  submit = () => {
    // const key = this.state.input;
    const title = this.state.input;

    this.setState(() => ({ input: '' }));

    // this.toHome();
    // Check if title exist already


    saveDeckTitle({title});
    this.props.navigation.navigate('DeckDetail', { title, cardCount: 0 });
    // console.log('add deck', this.props.navigation.goBack())

  };

  render() {
    const { input, res } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={{ fontSize: 24, textAlign: 'center' }}>
          What is the title of your new deck?
        </Text>
        <TextInput
          value={input}
          style={styles.input}
          onChangeText={this.handleTextChange}
          placeholder={'Deck Title'}
        />
        <SubmitButton onPress={this.submit} />
      </KeyboardAvoidingView>
    );
  }
}
export default AddDeck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white
  },
  input: {
    width: 300,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#757575',
    marginBottom: 50,
    marginTop: 50,
    marginLeft: 20,
    marginRight: 40
  },
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
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30
  }
});
