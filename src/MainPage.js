import  React, { Component } from 'react'
import  { Link } from 'react-router-dom'
import ListBooks from './ListBooks'


class MainPage extends Component{


	render(){
    const { books } = this.props
    const currentlyReading = books.filter(book =>  book.shelf == "currentlyReading" ) 
    const wantToRead = books.filter(book =>  book.shelf == "wantToRead" ) 
    const read = books.filter(book =>  book.shelf == "read" ) 


		return(

      <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ListBooks
                    books={currentlyReading}/>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ListBooks
                    books={wantToRead}/>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ListBooks
                    books={read}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link 
                to ="/search"
                //onClick={() => this.props.onCli()}
              >Add a book</Link>
            </div>
          </div>

		)	
	}
}          

export default MainPage