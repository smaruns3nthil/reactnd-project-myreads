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

onSearch2 = (query) => {
        // console.log(query,query.length)
        
        if(query.length == 0)
        {

          this.setState({SearchBooks:[]})
          
        }
        else {
// console.log(query)
       BooksAPI.search(query)
    .then((SearchBooks) => {
    	// console.log(SearchBooks,'test')


      const newSearchBooks = SearchBooks.map( book => {
        this.state.Books.forEach(book2 => { 
          if(book2.id == book.id)
          {
            // console.log('before')
            book.shelf=book2.shelf
            // console.log('after',book.shelf)
          }
        })
        if(!book.shelf)
        {
          // console.log(book.title)
          book.shelf='non'
        }

        return book

      })
      this.setState({SearchBooks: newSearchBooks},
        // ()=>{console.log(this.state.SearchBooks,'test2')}
        )
      // console.log(this.state.SearchBooks,'hello')

    })
    .catch(output => {
      this.setState({SearchBooks:[]})
      // console.log(output)
      // console.log(query)
    }) 
        }


  }



    onCli2 = () =>{
      // console.log('resetting')
      this.setState({SearchBooks:[]})
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
            onValueChange={this.onValueChange}
            onSearch2={this.onSearch2} 
            onCli2={this.onCli2}

            />
          )}/> 
      </div>
    )
  }
}

export default BooksApp
