import React from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';
import BasicButton from './BasicButton';
import { red, green } from '../utils/colors';

const quizItem = ({
  activeCard,
  counter,
  cardsCount,
  frontAnimatedStyle,
  backAnimatedStyle,
  clickCorrect,
  clickInCorrect,
  flipCard
}) => (
  <View>
    <Text style={styles.counts}>
      {counter}/{cardsCount}
    </Text>
    <View>
      <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
        <Text style={styles.title}>{activeCard.question}</Text>
        <Text style={styles.card} onPress={() => flipCard()}>
          Answer
        </Text>
      </Animated.View>
      <Animated.View
        style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle]}
      >
        <Text style={styles.title}>{activeCard.answer}</Text>
        <Text style={styles.card} onPress={() => flipCard()}>
          Question
        </Text>
      </Animated.View>

      <View style={styles.buttons}>
        <BasicButton onPress={() => clickCorrect()} text={'Correct'} color={green}/>
        <BasicButton onPress={() => clickInCorrect()} text={'Incorrect'} color={red}/>
      </View>
    </View>
  </View>
);

export default quizItem;

const styles = StyleSheet.create({
  flipCard: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden'
  },
  flipCardBack: {
    top: 0,
    position: 'absolute'
  },
  counts: {
    fontSize: 18,
    textAlign: 'center',
    padding: 5
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
    padding: 5
  },
  card: {
    color: red,
    fontSize: 18,
    textAlign: 'center',
    padding: 5
  },
  buttons: {
    marginTop: 50
  }
});
