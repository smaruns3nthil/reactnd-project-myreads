import React,{ Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import MainPage from './MainPage'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
 
   state = {
    Books: [],
    SearchBooks:[],
  }
  
  componentDidMount() {
    BooksAPI.getAll()
    .then((output) => {
      this.setState({Books:output})
      // console.log(this.state.Books)
    })
  } 

 onValueChange = (book,e) => {
    // console.log(e.target.value)
    // console.log(book)
    // this.state.Books.forEach( boo => console.log(boo.title) )
    BooksAPI.update(book,e.target.value)
    .then(output => {
      // console.log(output)
      this.updateDisplay();
    })
  }

  updateDisplay = () => {
    BooksAPI.getAll()
    .then((output) => {
      this.setState({Books:output})
      // console.log(output)
    })

  }

  onSearch = (query) => {
    BooksAPI.search(query)
    .then(output => {
      this.setState({SearchBooks:output})
      console.log(query)
      // console.log(this.state.SearchBooks)

    })
    .catch(output => {
      this.setState({SearchBooks:[]})
      // console.log(output)
    })
  }

onSearch2 = (query) => {
        // console.log(query,query.length)

        if(query.length == 0)
        {
          this.setState({SearchBooks:[]})
        }
        else {

       BooksAPI.search(query)
    .then(output => {
      this.setState({SearchBooks:output})
      // console.log(this.state.SearchBooks)

    })
    .catch(output => {
      this.setState({SearchBooks:[]})
      // console.log(output)
    }) 
        }


  }

  render() {
    return (

      <div className="app">
        
        <Route exact path="/" render={() => (
            <MainPage
            books={this.state.Books}
            onValueChange={this.onValueChange}        
            />        
          )}/>  
        <Route path="/search"  render={() => (
            <SearchPage
            searchBooks={this.state.SearchBooks}
            onSearch={this.onSearch}
            onSearch2={this.onSearch2} 
            />
          )}/> 
      </div>
    )
  }
}

export default BooksApp
