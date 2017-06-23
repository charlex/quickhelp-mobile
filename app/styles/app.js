/**
 * App
 */

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 15,
  },
  subhead: {
    textAlign: 'center',
    marginBottom: 15,
  },
  loading_container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  app_container: {
    marginTop: 20,
    padding: 20,
  },
  question_input: {
    padding: 0,
    marginTop: 20,
    color: '#000',
    height: 200,
    fontSize: 16,
    textAlign: 'center',

  },
});
