const actions = {
  SET_WARN: 'SET_WARN',
};

export const defaultState = {
  item: '',
};

export const warnReducer = (
  state = defaultState,
  { type, item }
) => {
  switch (type) {
    case actions.SET_WARN:
      return {
        ...state,
        item,
      };
    default:
      return state;
  }
};

export const setWarn = (item) => ({
  type: actions.SET_WARN,
  item,
});