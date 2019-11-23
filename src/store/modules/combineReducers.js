const combineReducers = reducers => (state, action) => {
  return Object.keys(reducers).reduce((result, key) => {
    result[key] = reducers[key](state[key], action);

    return result;
  }, {});
};

export default combineReducers;
