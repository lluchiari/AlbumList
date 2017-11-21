import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './src/containers/header';
import AlbumList from './src/containers/AlbumList';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Albums!'} />
        <AlbumList />
      </View>
    );
  }
}
