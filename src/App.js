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
      console.log(this.state.Books)
    })
  } 


  render() {
    return (

      <div className="app">
        
        <Route exact path="/" render={() => (
            <MainPage
            books={this.state.Books}        
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
