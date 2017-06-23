/**
 * App
 */
import _ from 'lodash';

const defaultState = {
  questions: {},
};

const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'RESET':
      return defaultState;
    case 'NEW_QUESTION': {
      const newQuestionId = _.keys(state.questions).length + 1;
      return {
        ...state,
        questions: {
          ...state.questions,
          [newQuestionId]: {
            text: action.question_text,
          },
        },
      };
    }
    default:
      return state;
  }
};

export default appReducer;
