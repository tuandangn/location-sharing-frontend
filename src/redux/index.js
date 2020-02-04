import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { regionReducer } from './region';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    region: regionReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));
export default store;