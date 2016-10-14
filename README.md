This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This project was based on [Todo React Redux](https://github.com/r-park/todo-react-redux).

## Table of Contents

- React
- Redux
- React-Router
- React-Router-Redux
- Firebase
- Redux-Thunk
- Reselect
- localStorage
- Secure Routes

## Demo and config

[Demo](https://react-redux-firebase-login.firebaseapp.com/)

user@example.com 123456

Install

```shell
$ git clone https://github.com/jessemezini/react-redux-firebase-login
$ npm install
$ npm start
```

Add your project config

```javascript
// src/firebase/config.js

export const firebaseConfig = {
  apiKey: 'your api key',
  authDomain: 'your-project-id.firebaseapp.com',
  databaseURL: 'https://your-project-id.firebaseio.com',
  storageBucket: 'your-project-id.appspot.com'
};
```

Enable password login and add a user.
