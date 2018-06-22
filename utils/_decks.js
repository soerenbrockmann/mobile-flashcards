import { AsyncStorage } from 'react-native';

export const DECK_STORAGE_KEY = 'MobileFlashcards:decks';

export const formatDecksResults = results =>
  !results ? {} : JSON.parse(results);
