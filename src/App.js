import React,{ Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import MainPage from './MainPage'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {

  state = {
    books: [],
    searchBooks:[],
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((output) => {
      this.setState({books:output})
    })
  }

 onValueChange = (book,e) => {
    BooksAPI.update(book,e.target.value)
    .then(output => {
      this.updateDisplay();
    })
  }

  updateDisplay = () => {
    BooksAPI.getAll()
    .then((output) => {
      this.setState({books:output})
    })
  }

  onSearch = (query) => {
    if(query.length == 0)
    {
     this.setState({searchBooks:[]})
    }
    else {
      BooksAPI.search(query)
      .then((searchBooks) => {
        const newSearchBooks = searchBooks.map( book => {
          this.state.books.forEach(book2 => {
            if(book2.id == book.id)
            {
              book.shelf=book2.shelf
            }
          })
          if(!book.shelf)
          {
          book.shelf='none'
          }
          return book
        })
        this.setState({searchBooks: newSearchBooks},
      )
      })
      .catch(output => {
        this.setState({searchBooks:[]})
      })
    }
  }

  pageReset = () =>{
    this.setState({searchBooks:[]})
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <MainPage
            books={this.state.books}
            onValueChange={this.onValueChange}
            />
          )}/>
        <Route path="/search"  render={() => (
            <SearchPage
            searchBooks={this.state.searchBooks}
            onValueChange={this.onValueChange}
            onSearch={this.onSearch}
            pageReset={this.pageReset}
            />
          )}/>
      </div>
    )
  }
}

export default BooksApp
