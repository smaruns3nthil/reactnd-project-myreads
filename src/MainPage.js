import  React, { Component } from 'react'
import  { Link } from 'react-router-dom'
import ListBooks from './ListBooks'
import PropTypes from 'prop-types'

class MainPage extends Component{
  static propTypes = {
    books: PropTypes.array.isRequired,
    onValueChange:PropTypes.func.isRequired
  }

	render(){

    const { books, onValueChange } = this.props
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
                      books={currentlyReading}
                      onValueChange={(book,e) => onValueChange(book,e)}
                      />
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ListBooks
                      books={wantToRead}
                      onValueChange={(book,e) => onValueChange(book,e)}
                      />
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ListBooks
                      books={read}
                      onValueChange={(book,e) => onValueChange(book,e)}
                      />
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link
                to ="/search"
                >Add a book</Link>
            </div>
          </div>
		)
	}
}

export default MainPage