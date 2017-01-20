import { BOOK_SELECTED } from '../actions/bookType';
// State arguement is not application state, on the state in this reducer
export default function(state = null, action) {
  switch(action.type) {
    case BOOK_SELECTED:
      return action.payload;
  }
  return state;
}
