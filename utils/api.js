import { AsyncStorage } from 'react-native';
import { formatDecksResults, formatCardResults, DECK_STORAGE_KEY } from './_decks';

export const getDecks = () => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(formatDecksResults);
};

export const getCards = ({ title }) => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then((result) => {
    const parsedResults = JSON.parse(result);
    return parsedResults[title].questions;
  });
};

export const saveDeckTitle = ({ title }) => {
  // When adding a new deck get the existinmg array, merge new deck and save it to the same key
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
  // return AsyncStorage.clear()
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
/*
FetchValue = () => {
  AsyncStorage.getItem("Favorites").then((value) => {
    this.setState({
      favs: JSON.parse(value)
    });
  }).done();
};

SaveValue = () => {
  const newFavs = [...this.state.favs, this.state.UserInput];
  this.setState({ favs: newFavs, UserInput: '' }, () => {
      AsyncStorage.setItem("Favorites", JSON.stringify(this.state.favs));
      Keyboard.dismiss()
  });
};

RemoveValue(item){
    const index = this.state.favs.indexOf(item);
    const newArray = [...this.state.favs];
    newArray.splice(index,1);
    this.setState({ favs: newArray });
    AsyncStorage.setItem("Favorites", JSON.stringify(newArray));
}
*/
/*
export function removeEntry(key) {
  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    data[key] = undefined;
    delete data[key];
    AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data));
  });
}
*/
