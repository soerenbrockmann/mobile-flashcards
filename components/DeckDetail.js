import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import BasicButton from './BasicButton';

const DeckDetail = ({ navigation }) => {
  const { title, cardCount } = navigation.state.params;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.card}>{cardCount} cards</Text>
      </View>
      <View style={styles.buttons}>
        <BasicButton
          onPress={() => navigation.navigate('AddCard', { title, cardCount })}
          text={'Add Card'}
        />
        <BasicButton
          onPress={() => navigation.navigate('Quiz', { title })}
          text={'Start Quiz'}
        />
      </View>
    </View>
  );
};

export default DeckDetail;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'stretch'
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
  buttons: {
    marginTop: 50
  }
});
