import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import BasicButton from './BasicButton';

const QuizScore = ({
  cardsCount,
  correct,
  incorrect,
  goBack,
  clickRestart
}) => (
  <View>
    <Text style={styles.title}>Questions: {cardsCount}</Text>
    <Text style={styles.title}>Correct Answers: {correct}</Text>
    <Text style={styles.title}>Incorrect Answers: {incorrect}</Text>
    <View style={styles.buttons}>
      <BasicButton onPress={() => clickRestart()} text={'Restart Quiz'} />
      <BasicButton onPress={() => goBack()} text={'Back to Deck'} />
    </View>
  </View>
);

export default QuizScore;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: 'center',
    padding: 5
  },
  buttons: {
    marginTop: 50
  }
});
