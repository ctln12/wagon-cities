const activeCityReducer = (state, action) => {
  if (state === undefined) {
    // Reducer initialisation
    return null;
  }

  // TODO: handle some actions
  switch (action.type) {
    case 'SELECT_CITY':
      return action.payload;
    default:
      return state;
  }
};

export default activeCityReducer;
