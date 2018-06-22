import React, { Component } from 'react';
import {
  Platform,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native';
import { purple, white } from '../utils/colors';
import { getCards } from '../utils/api';

class Quiz extends Component {
  state = {
    cards: [],
    activeCard: {
      answer: '',
      question: ''
    },
    cardsCount: 0,
    counter: 1,
    correct: 0,
    incorrect: 0
  };

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    });
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg']
    });
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    });
  }

  async componentDidMount() {
    const { title } = this.props.navigation.state.params;
    const cards = await getCards({ title });
    await this.setState({
      cardsCount: cards.length,
      activeCard: cards.find(card => card !== this.state.activeCard),
      cards
    });
    console.log(this.state);
  }

  flipCard() {
    if (this.value > 90) {
      Animated.spring(this.animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10
      }).start();
    } else {
      Animated.spring(this.animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10
      }).start();
    }
  }

  render() {
    const frontAnimatedStyle = {
      transform: [{ rotateY: this.frontInterpolate }]
    };
    const backAnimatedStyle = {
      transform: [{ rotateY: this.backInterpolate }]
    };
    const {
      cards,
      correct,
      incorrect,
      cardsCount,
      counter,
      activeCard
    } = this.state;
    const quizItem = activeCard => (
      <View>
        <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
          <Text style={styles.title}>{activeCard.question}</Text>
          <Text style={styles.card} onPress={() => this.flipCard()}>
            Answer
          </Text>
        </Animated.View>
        <Animated.View
          style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle]}
        >
          <Text style={styles.title}>{activeCard.answer}</Text>
          <Text style={styles.card} onPress={() => this.flipCard()}>
            Question
          </Text>
        </Animated.View>

        <View style={styles.buttons}>
          <TouchableHighlight
            style={
              Platform.OS === 'ios'
                ? styles.iosSubmitButton
                : styles.AndroidSubmitButton
            }
            onPress={() =>
              this.setState({
                cards: cards.filter(card => card !== activeCard),
                activeCard: cards.find(card => card !== activeCard),
                correct: correct + 1,
                counter: counter + 1
              })
            }
          >
            <Text style={styles.submitButtonText}>Correct</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={
              Platform.OS === 'ios'
                ? styles.iosSubmitButton
                : styles.AndroidSubmitButton
            }
            onPress={() =>
              this.setState({
                cards: cards.filter(card => card !== activeCard),
                activeCard: cards.find(card => card !== activeCard),
                incorrect: incorrect + 1,
                counter: counter + 1
              })
            }
          >
            <Text style={styles.submitButtonText}>Incorrect</Text>
          </TouchableHighlight>
        </View>
      </View>
    );

    return (
      <View style={styles.container}>
        {counter <= cardsCount && (
          <View>
            <Text style={styles.title}>
              {counter}/{cardsCount}
            </Text>
            <View>{quizItem(activeCard)}</View>
          </View>
        )}
        {counter > cardsCount && (
          <View>
            <Text style={styles.title}>Questions: {cardsCount}</Text>
            <Text style={styles.title}>Correct Answers: {correct}</Text>
            <Text style={styles.title}>Incorrect Answers: {incorrect}</Text>
          </View>
        )}
      </View>
    );
  }
}
export default Quiz;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'stretch'
  },
  flipCard: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden'
  },
  flipCardBack: {
    top: 0,
    position: 'absolute',
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
  },
  iosSubmitButton: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10
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
    marginTop: 10
  },
  submitButtonText: {
    color: white,
    fontSize: 22,
    textAlign: 'center'
  }
});
