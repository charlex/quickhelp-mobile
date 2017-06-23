/**
 * App
 */

import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Text, View, TextInput, Button } from 'react-native';

import app from '../actions';


import { app as appStyles } from '../styles';


class App extends Component {
  static propTypes = {
    actions: PropTypes.shape({
      newQuestion: PropTypes.func.isRequired,
    }).isRequired,
    question_count: PropTypes.number.isRequired,
  }

  state = {
    message: '',
  }

  onPress() {
    this.props.actions.newQuestion(this.state.message);
    this.setState({ message: '' });
  }

  render() {
    let subhead = 'No questions submitted';
    if (this.props.question_count === 1) {
      subhead = '1 question submitted';
    } else {
      subhead = `${this.props.question_count} questions submitted`;
    }

    return (
      <View style={appStyles.app_container}>
        <Text style={appStyles.header}>
          {'Quickhelp'}
        </Text>
        <Text style={appStyles.subhead}>
          {subhead}
        </Text>
        <TextInput
          multiline
          value={this.state.message}
          onChangeText={(message) => { this.setState({ message }); }}
          style={appStyles.question_input}
          placeholder={'Write question here'}
        />
        <Button title={'Submit question'} onPress={() => this.onPress()} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    question_count: _.values(state.questions).length,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(app.app, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
