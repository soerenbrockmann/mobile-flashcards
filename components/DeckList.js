import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  RefreshControl
} from 'react-native';
import { white } from '../utils/colors';
import { getDecks } from '../utils/api';
import DeckItem from './DeckItem';

class DeckList extends Component {
  state = {
    decks: [],
    refreshing: false
  };

  async componentDidMount() {
    await this.mapDecks();
  }

  onRefresh = async () => {
    await this.setState({ refreshing: true });
    await this.mapDecks();
    await this.setState({ refreshing: false });
  };

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
    return <DeckItem {...{ ...item, ...navigation }} />;
  };

  renderNotFoundItem = ({ item }) => {
    return <Text style={styles.notFoundText}>{item.title}</Text>;
  };

  render() {
    const { decks } = this.state;

    return (
      <View style={styles.container}>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => this.onRefresh()}
            />
          }
          ListHeaderComponent={
            <Text style={styles.listHeader}>Swipe down to refresh view!</Text>
          }
          data={decks.length < 1 ? [{ title: 'No decks found!' }] : decks}
          renderItem={
            decks.length < 1 ? this.renderNotFoundItem : this.renderItem
          }
          keyExtractor={(item, index) => index.toString()}
        />
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
  listHeader: {
    alignSelf: 'center'
  },
  notFoundText: {
    fontSize: 18,
    marginTop: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#757575',
    margin: 50
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30
  }
});
