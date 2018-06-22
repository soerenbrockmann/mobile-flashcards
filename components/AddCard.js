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
import { saveCard } from '../utils/api';

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
    // ToDo: Get Key and title

    const { title } = this.props.navigation.state.params;
    const { questionInput, answerInput } = this.state

    saveCard({ title, question: questionInput, answer: answerInput });
    // const increasedCount = cardCount + 1;
    // cardCounter(increasedCount);
    // shouldFetchDecks({ shouldFetchDecks: true })
    this.props.navigation.goBack();
    // console.log('add deck', this.props.navigation.goBack())
    this.setState(() => ({
      questionInput: '',
      answerInput: ''
    }));
    // clearLocalNotification().then(setLocalNotification);
  };

  render() {
    const { input, res } = this.state;
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
        <SubmitButton onPress={this.submit} />
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
