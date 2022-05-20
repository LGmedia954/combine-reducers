import { combineReducers } from "redux";
import authorsReducer from './authorsReducer';
import booksReducer from './booksReducer';

const rootReducer = combineReducers({
  books: booksReducer,
  authors: authorsReducer
})

export default rootReducer;