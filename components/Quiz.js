import React, { Component } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { getCards } from '../utils/api';
import { clearLocalNotification, setLocalNotification } from '../utils/helper';
import QuizItem from './QuizItem';
import QuizScore from './QuizScore';

class Quiz extends Component {
  state = {
    cards: [],
    remainingCards: [],
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
      cards,
      remainingCards: cards
    });
  }

  render() {
    const flipCard = () => {
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
    };

    const clickCorrect = () => {
      const { activeCard, remainingCards, correct, counter } = this.state;
      this.setState({
        remainingCards: remainingCards.filter(card => card !== activeCard),
        activeCard: remainingCards.find(card => card !== activeCard),
        correct: correct + 1,
        counter: counter + 1
      });
    };

    const clickInCorrect = () => {
      const { activeCard, remainingCards, incorrect, counter } = this.state;
      this.setState({
        remainingCards: remainingCards.filter(card => card !== activeCard),
        activeCard: remainingCards.find(card => card !== activeCard),
        incorrect: incorrect + 1,
        counter: counter + 1
      });
    };

    const clickRestart = () => {
      const { cards } = this.state;
      this.setState({
        remainingCards: cards,
        cardsCount: cards.length,
        activeCard: cards.find(
          card =>
            card !==
            {
              answer: '',
              question: ''
            }
        ),
        counter: 1,
        correct: 0,
        incorrect: 0
      });
    };

    const frontAnimatedStyle = {
      transform: [{ rotateY: this.frontInterpolate }]
    };
    const backAnimatedStyle = {
      transform: [{ rotateY: this.backInterpolate }]
    };
    const { cardsCount, counter } = this.state;

    if (counter > cardsCount) {
      clearLocalNotification().then(setLocalNotification);
    }
    return (
      <View style={styles.container}>
        <View>
          {counter <= cardsCount && (
            <QuizItem
              {...{
                ...this.state,
                frontAnimatedStyle,
                backAnimatedStyle,
                flipCard,
                clickInCorrect,
                clickCorrect
              }}
            />
          )}
        </View>
        <View>
          {counter > cardsCount && (
            <QuizScore
              {...{ ...this.state, clickRestart, ...this.props.navigation }}
            />
          )}
        </View>
      </View>
    );
  }
}
export default Quiz;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'stretch'
  }
});
