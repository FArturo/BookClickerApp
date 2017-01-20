import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map( books => {
      return (
        <li
           onClick={() => this.props.selectBook(books)}
           className="list-group-item"
           key={books.title}>
           {books.title}
         </li>
      );
    });
  }
  render() {
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return{
    books: state.books
  }
}

// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenver selectBook is called the result should be passed to all of our reducers
  return bindActionCreators({ selectBook }, dispatch)
}


// Promote BookList from a component to a container, it needs to know about this new
// dispatch method selecBook, make it availble as a prop
export default connect (mapStateToProps, mapDispatchToProps)(BookList);
