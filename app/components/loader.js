/**
 * Loader
 */

import React, { Component } from 'react';
import { Text, ActivityIndicator, View } from 'react-native';

import { app as appStyles } from '../styles';


export default class Loader extends Component {
  state = {
    message: '',
  }

  render() {
    return (
      <View style={appStyles.loading_container}>
        <ActivityIndicator size={'large'} color={'#000000'} />
        <Text>
          {this.state.message}
        </Text>
      </View>
    );
  }
}
