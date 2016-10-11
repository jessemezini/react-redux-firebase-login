import { firebaseAuth } from '../firebase';
import {
  INIT_AUTH,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_OUT_SUCCESS
} from './actionTypes';

export function signIn(email, password) {
  return dispatch => {
    firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(result => dispatch(signInSuccess(result)))
    .catch(error => dispatch(signInError(error)));
  }
}

export function initAuth(user) {
  return {
    type: INIT_AUTH,
    payload: user
  }
}

export function signInSuccess(result) {
  console.log('User signed in!');
  return {
    type: SIGN_IN_SUCCESS,
    payload: result
  }
}

export function signInError(error) {
  alert('Error: ' + error.message);
  return {
    type: SIGN_IN_ERROR,
    payload: error
  }
}

export function signOut() {
  localStorage.removeItem('authenticated');
  return dispatch => {
    firebaseAuth.signOut()
      .then(() => dispatch(signOutSuccess()));
  };
}

export function signOutSuccess() {
  console.log('User signed out!');
  return {
    type: SIGN_OUT_SUCCESS
  };
}
