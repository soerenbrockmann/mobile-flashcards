import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';
import { white } from '../utils/colors';
import { saveCard } from '../utils/api';
import SubmitButton from './SubmitButton';

class AddCard extends Component {
  state = {
    questionInput: '',
    answerInput: ''
  };

  handleQuestionTextChange = questionInput => {
    this.setState(() => ({ questionInput }));
  };

  handleAnswerTextChange = answerInput => {
    this.setState(() => ({ answerInput }));
  };

  submit = () => {
    const { title, cardCount } = this.props.navigation.state.params;
    const { questionInput, answerInput } = this.state
    saveCard({ title, question: questionInput, answer: answerInput });
    this.props.navigation.navigate('DeckDetail', { title, cardCount: cardCount + 1 })
    this.setState(() => ({
      questionInput: '',
      answerInput: ''
    }));
  };

  render() {
    const { input } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={{ fontSize: 24, textAlign: 'center' }}>
          Enter in your question and answer!
        </Text>
        <TextInput
          value={input}
          style={styles.inputQuestion}
          onChangeText={this.handleQuestionTextChange}
          placeholder={'Enter in the question'}
        />
        <TextInput
          value={input}
          style={styles.inputAnswer}
          onChangeText={this.handleAnswerTextChange}
          placeholder={'Enter in the answer'}
        />
        <SubmitButton onPress={this.submit} text={'Submit'}/>
      </KeyboardAvoidingView>
    );
  }
}
export default AddCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white
  },
  inputQuestion: {
    width: 300,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#757575',
    marginBottom: 20,
    marginTop: 50,
    marginLeft: 20,
    marginRight: 40
  },
  inputAnswer: {
    width: 300,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#757575',
    marginBottom: 50,
    marginTop: 5,
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
