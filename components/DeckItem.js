import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { getCards } from '../utils/api';
import { gray, borderGray } from '../utils/colors';

const DeckItem = (props) => {
  const key = Object.keys(props)[0];
  const { title, questions } = props[key];
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={async () => { 
        const deck = await getCards({ title });
        await props.navigate('DeckDetail', { title, cardCount: deck.length })}
      }
    >
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.card}>
          {questions ? questions.length : 0} cards
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default DeckItem;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    padding: 5
  },
  card: {
    fontSize: 18,
    textAlign: 'center',
    padding: 5,
    color: gray
  },
  button: {
    alignItems: 'center',
    padding: 10,
    alignSelf: "stretch",
    borderBottomWidth: 1,
    borderBottomColor: borderGray
  }
});
