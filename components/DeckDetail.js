import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Platform
} from 'react-native';
import { purple, white } from '../utils/colors';

class DeckDetail extends Component {
  /*state = {
    cardCount: this.props.navigation.state.params.cardCount
  };*/

  render() {
    const { title, cardCount } = this.props.navigation.state.params;
    // const { cardCount } = this.state;

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.card}>{cardCount} cards</Text>
        </View>
        <View style={styles.buttons}>
          <TouchableHighlight
            style={
              Platform.OS === 'ios'
                ? styles.iosSubmitButton
                : styles.AndroidSubmitButton
            }
            onPress={() => this.props.navigation.navigate('AddCard', { cardCount, title })}
          >
            <Text style={styles.submitButtonText}>Add Card</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={
              Platform.OS === 'ios'
                ? styles.iosSubmitButton
                : styles.AndroidSubmitButton
            }
            onPress={() => this.props.navigation.navigate('Quiz', { title })}
          >
            <Text style={styles.submitButtonText}>Start Quiz</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
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
    marginTop: 50,
  },
  iosSubmitButton: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10,
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
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: white,
    fontSize: 22,
    textAlign: 'center'
  }
});
