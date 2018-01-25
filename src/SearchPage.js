import  React, { Component } from 'react'
import  { Link } from 'react-router-dom'
import ListBooks from './ListBooks'
import PropTypes from 'prop-types'
import { DebounceInput } from 'react-debounce-input'

class SearchPage extends Component{
	static propTypes = {
	    searchBooks: PropTypes.array.isRequired,
	    onValueChange:PropTypes.func.isRequired,
	    onSearch: PropTypes.func.isRequired,
	    pageReset:PropTypes.func.isRequired
  	}

	state = {
	    query: '',
    }

  	componentDidMount(){
  		this.props.pageReset()
  	}

	updateQuery = (query) => {
	    this.setState({ query: query.trim() })
		this.props.onSearch(query)
 	}

	render(){
		const { query }  = this.state
		const { searchBooks, onValueChange } = this.props
		return(
			<div className="search-books">
            <div className="search-books-bar">
              <Link
              	to='/'
              	className="close-search"
              	>Close</Link>
              <div className="search-books-input-wrapper">
	            <DebounceInput
		            debounceTimeout={250}
	                element="input"
	                type="text"
                    placeholder="Search by title or author"
	                onChange={(e) => this.updateQuery(e.target.value)}
	                value={query}
	                />
	          </div>
            </div>
            <div className="search-books-results">
	            <ListBooks
		            books={searchBooks}
		            onValueChange={(book,e) => onValueChange(book,e)}
	            />
            </div>
          </div>
		)
	}
}

export default SearchPage

