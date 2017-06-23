

function newQuestion(message) {
  return {
    type: 'NEW_QUESTION',
    message,
  };
}

export default {
  newQuestion,
};
