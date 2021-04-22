import React, { Component } from "react";
import Book from "../../components/Book";
import Header from "../../components/Header";
import API from "../../utils/bookAPI";

class Search extends Component {

    state = {
        search: "",
        books: []
    };

    // on page load,
    componentDidMount() {
        // this.searchBooks("Jim Harrison");
    }

    searchBooks = param => {
        API.search(param)
          .then(results => {this.setState({books: results.data.items})})
          .catch(err => console.log(err));
    }

    handleFormSubmit = () => {
      const result = document.getElementById("searchInput").value;
      this.setState({search: result});
      console.log(result);
      this.searchBooks(result);
    }

    saveBook = (props) => {
      console.log(props); // Testing
      API.saveBook(props)
        .then(results => console.log(results))
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container-fluid">
              <h2>Book Search</h2>
              {/* <h3>Book</h3> */}
              <form>
                <input id="searchInput" ></input>
                <button onClick={this.handleFormSubmit} className="">
                Search
                </button>
              </form>
            <div>
              <h3>Results</h3>
              {this.state.books.map(book => (
                <div className="card" key={book.id}>
                  <Book book={book}
                        save={this.saveBook}/>
                </div>

              ))}
            </div>


            </div>
        )
    }
}

export default Search;