import  React, { Component } from 'react'
import  { Link } from 'react-router-dom'
import ListBooks from './ListBooks'



class SearchPage extends Component{

	state = {
	    query: ''
	  }

	updateQuery = (query) => {
    this.setState({ query: query.trim() })
    // console.log(this.state.query.length, query)
		this.props.onSearch2(query)
	
	
    
    
  	}  


  	
  		
  	

	render(){
		 const { query } = this.state

		  // console.log('Props',this.props)
		 // console.log('State',this.state)
		return(
			<div className="search-books">
            <div className="search-books-bar">
              <Link
              	to= {{
					  pathname: '/'
					 
					}}

              	
              	className="close-search" 
              	//onClick={() => this.props.onCli2() }
              	>Close</Link>
              <div className="search-books-input-wrapper">
                <input 
                type="text" 
                placeholder="Search by title or author" 
                value={query}
            	onChange={(e) => this.updateQuery(e.target.value)} />
              {JSON.stringify(this.state)}
              </div>

            </div>
            <div className="search-books-results">
            




<ol className="books-grid">
				{this.props.searchBooks.map((book) => (
	                      <li key={book.id}>
	                        <div className="book">
	                          <div className="book-top">
	                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
	                            <div className="book-shelf-changer">
	                              <select value={'None'} >
	                                <option value="none" disabled>Move to...</option>
	                                <option value="currentlyReading">Currently Reading</option>
	                                <option value="wantToRead">Want to Read</option>
	                                <option value="read">Read</option>
	                                <option value="none">None</option>
	                              </select>
	                            </div>
	                          </div>
	                          <div className="book-title">{book.title}</div>
	                          <div className="book-authors">{book.authors[0]}
	                          </div>
	                        </div>
	                      </li>
					))}
	                    </ol>

            	

            </div>
          </div>

		)	
	}
}          

export default SearchPage

