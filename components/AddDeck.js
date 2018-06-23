import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';
import { white } from '../utils/colors';
import { saveDeckTitle } from '../utils/api';
import SubmitButton from './SubmitButton';

class AddDeck extends Component {
  state = {
    input: '',
  };

  handleTextChange = input => {
    this.setState(() => ({ input }));
  };

  submit = () => {
    const title = this.state.input;
    this.setState(() => ({ input: '' }));
    saveDeckTitle({title});
    this.props.navigation.navigate('DeckDetail', { title, cardCount: 0 });
  };

  render() {
    const { input } = this.state;
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
        <SubmitButton onPress={this.submit} text={'Create Deck'} />
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
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30
  }
});
