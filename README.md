# Mobile Flashcards: A mobile app to study flashcards

This app allows users to study collections of flashcards. Users can create different categories, add flashcards to those categories, then take quizzes on those collections.

To get started developing right away:

* Install dependencies `yarn install`
* Start app `yarn start`

# Supported Devices

This app has been tested with iOS Simulator iPhoneX - 11.4

## What You're Getting

```bash
├── README.md - This file.
├── package.json # npm package manager file.
├── App.test.js # Test file
├── App.js # Main component
├── app.json # Expo App Store configuration file
├── .watchmanconfig.json # Watchman configuration file
├── .gitignore # Files ignored by Git
├── .babelrc # Babel configuration file
├── utils
│   ├── api.js # AsyncStorage interactions
│   ├── colors.js # Defined colors
│   └── helper.js # File for notification actions
└── components # Source files
    ├── AddCard.js # Renders a component to add card to a deck
    ├── AddDeck.js # Renders a component to add a deck/category
    ├── BasicButton.js # Renders a standard button with animation
    ├── DeckDetail.js # Renders details of a deck
    ├── DeckItem.js # Renders a deck item for the list view
    ├── DeckList.js # Renders a list of decks
    ├── Quiz.js # Main component for quiz
    ├── QuizItem.js # Renders a qiz card with flip animation
    ├── QuizScore.js # Renders the score of a finished quiz
    └── SubmitButton.js # Renders a submit button
```

## Create React Native App

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).
