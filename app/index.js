/**
 * Index
 */
import { Provider } from 'react-redux';
import React, { Component } from 'react';

import { App } from './containers';
import { Loader } from './components';
import configureStore from './store';

export default class Index extends Component {
  state = {
    store: null,
    loading: true,
    failed: false,
    message: 'Loading...',
  }

  componentWillMount() {
    const store = configureStore();
    this.setState({
      store,
      loading: false,
      message: 'Loaded',
    });
  }

  render() {
    if (this.state.loading || this.state.failed) {
      return <Loader />;
    }

    return (
      <Provider store={this.state.store}>
        <App />
      </Provider>
    );
  }
}
