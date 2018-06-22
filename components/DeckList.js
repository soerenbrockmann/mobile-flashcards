import React, { Component } from 'react';
import {
  Platform,
  TouchableOpacity,
  StyleSheet,
  Text,
  FlatList,
  View
} from 'react-native';
import { purple, white } from '../utils/colors';
import { getDecks } from '../utils/api';
import DeckItem from './DeckItem';

class DeckList extends Component {
  state = {
    decks: [],
  };

  componentDidMount() {
    this.mapDecks();
  }

  mapDecks = async () => {
    const decksResponse = await getDecks();
    const decks = await Object.keys(decksResponse).reduce((prev, key) => {
      prev.push({
        [key]: decksResponse[key]
      });
      return prev;
    }, []);
    await this.setState({ decks });
  };

  renderItem = ({ item }) => {
    const { navigation } = this.props;
    // const shouldFetchDecks = () => this.setState({ shouldFetchDecks: true });
    return <DeckItem {...{ ...item, ...navigation }} />;
  };

  render() {
    const { decks } = this.state;
    const { shouldRender = false } = this.props.navigation.state.params || {}
    if (shouldRender) {
      this.props.navigation.state.params.shouldRender = false

      this.mapDecks();
    }
    return (
      <View style={styles.container}>
        {decks.length > 0 && (
          <FlatList
            data={decks}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
        {decks.length < 1 && (
          <Text style={{ fontSize: 24, textAlign: 'center' }}>
            No decks found!
          </Text>
        )}
      </View>
    );
  }
}
export default DeckList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white
  },
  input: {
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#757575',
    margin: 50
  },
  iosSubmitButton: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40
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
    alignItems: 'center'
  },
  submitButtonText: {
    color: white,
    fontSize: 22,
    textAlign: 'center'
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30
  }
});
