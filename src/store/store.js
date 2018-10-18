import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import prodReducer from "../reducers/prodReducer.js";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(prodReducer, composeWithDevTools(applyMiddleware(thunk) ));
export default store;
