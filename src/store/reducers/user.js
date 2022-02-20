import { LoadStatus } from '../../utils/constants';

const actions = {
  SET_USER: 'SET_USER',
};

const defaultState = {
  status: LoadStatus.PENDING,
  item: null,
};

export const userReducer = (
  state = defaultState,
  { type, status, item }
) => {
  switch (type) {
    case actions.SET_USER:
      return {
        ...state,
        status,
        item,
      };
    default:
      return state;
  }
};

export const setUser = ({ status, item }) => ({
  type: actions.SET_USER,
  item,
  status,
});

export const setUserSuccess = (item) =>
  setUser({ item, status: LoadStatus.SUCCESS });

export const setUserError = () =>
  setUser({ item: null, status: LoadStatus.ERROR });