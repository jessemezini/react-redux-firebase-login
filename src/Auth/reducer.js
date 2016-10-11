import {
  INIT_AUTH,
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS
} from './actionTypes';

const initialState = {
  authenticated: false,
  id: null
}

export function authReducer(state = {}, action) {
  switch (action.type) {
  case INIT_AUTH:
  case SIGN_IN_SUCCESS:
    return {
      authenticated: !!action.payload,
      id: action.payload ? action.payload.uid : null
    };

  case SIGN_OUT_SUCCESS:
    return initialState;

  default:
    return state;
  }
}
