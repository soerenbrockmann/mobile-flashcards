import { AsyncStorage } from 'react-native';

const DECK_STORAGE_KEY = 'MobileFlashcards:decks';

const formatDecksResults = results => (!results ? {} : JSON.parse(results));

export const getDecks = () => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(formatDecksResults);
};

export const getCards = ({ title }) => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(result => {
    const parsedResults = JSON.parse(result);
    return parsedResults[title].questions;
  });
};

export const saveDeckTitle = ({ title }) => {
  // return AsyncStorage.clear()
  return AsyncStorage.getItem(DECK_STORAGE_KEY, (err, result) => {
    const parsedResults = JSON.parse(result);
    const deck = {
      ...parsedResults,
      [title]: {
        title,
        questions: []
      }
    };

    return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(deck));
  });
};
export const saveCard = ({ title, question, answer }) => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY, (err, result) => {
    const parsedResults = JSON.parse(result);
    const { questions } = parsedResults[title];
    const deck = {
      ...parsedResults,
      [title]: {
        title,
        questions: [...questions, { question, answer }]
      }
    };

    return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(deck));
  });
};
