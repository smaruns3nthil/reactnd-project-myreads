import React,{ Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import MainPage from './MainPage'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
 
   state = {
    Books: [],
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
            <SearchPage/>
          )}/> 
      </div>
    )
  }
}

export default BooksApp
