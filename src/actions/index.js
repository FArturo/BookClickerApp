import { BOOK_SELECTED } from './bookType';

export function selectBook(book) {

  console.log(`A book was selected named:`, book.title);
  // SelectBook is an actionCreator it needs to return an action
  // an object with a type property
  return {
    type: BOOK_SELECTED,
    payload: book
  }
}
