import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer, { rootSaga } from './modules';
//import Thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import './index.css';

const sagaMiddleware = createSagaMiddleware();

//const store = createStore(rootReducer, applyMiddleware(Thunk));
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
