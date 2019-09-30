import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './redux/reducers'
import rootSaga from './redux/sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware( sagaMiddleware ))

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
  , document.getElementById('root'));
