

function newQuestion(message) { // eslint-disable-line import/prefer-default-export
  return {
    type: 'NEW_QUESTION',
    message,
  };
}

export default {
  newQuestion,
};
