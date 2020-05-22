import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
//import store from './app/store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers';
//import startGame from './actions/settings';


const store = createStore(rootReducer, applyMiddleware(thunk));
console.log('store:',{store}); 
//console.log('store state 1:',store.getState()); 
store.subscribe(() => console.log('store.getstate', store.getState()));

const EvenOrOdds =()=>{
  return(
    <Provider store={store}>
    <App/>
      </Provider>
  )
}
export default  EvenOrOdds;


