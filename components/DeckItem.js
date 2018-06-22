import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

const DeckItem = (props) => {
  const key = Object.keys(props)[0];
  const { title, questions } = props[key];
  return (
    <TouchableHighlight
      style={styles.button}
      onPress={() => props.navigate('DeckDetail', { title, cardCount: questions.length })}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.card}>
          {questions ? questions.length : 0} cards
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default DeckItem;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    padding: 5
  },
  card: {
    fontSize: 18,
    textAlign: 'center',
    padding: 5
  },
  button: {
    alignItems: 'center',
    padding: 10
  }
});
