import { combineReducers } from 'redux';
import BooksReducer from './reducersBook';
import ActiveBook from './reducerActiveBook';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
