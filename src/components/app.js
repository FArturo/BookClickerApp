import React, { Component } from 'react';
import BookList from '../containers/booksList';
import BookDetail from '../containers/bookDetail';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList/>
        <BookDetail/>
      </div>
    );
  }
}
