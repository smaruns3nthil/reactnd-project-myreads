import  React, { Component } from 'react'
import  { Link } from 'react-router-dom'
import ListBooks from './ListBooks'
import PropTypes from 'prop-types'


class SearchPage extends Component{
	static propTypes = {
    searchBooks: PropTypes.array.isRequired,
    onValueChange:PropTypes.func.isRequired,
    onSearch2: PropTypes.func.isRequired,
    onCli2:PropTypes.func.isRequired
  	}

	state = {
    query: ''
    }

  	componentDidMount(){
  		this.props.onCli2()
  	}

	updateQuery = (query) => {
    this.setState({ query: query.trim() })
    // console.log(this.state.query.length, query)
		this.props.onSearch2(query)
 	}  
	
	render(){
		 const  query  = this.state.query

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
              	// onClick={() => this.props.onCli2() }
              	>Close</Link>
                <div className="search-books-input-wrapper">
                <input 
                type="text" 
                placeholder="Search by title or author" 
                value={query}
            	onChange={(e) => this.updateQuery(e.target.value)} />
             
              </div>

            </div>
            <div className="search-books-results">
            <ListBooks
            books={this.props.searchBooks}
            onValueChange={(book,e) => this.props.onValueChange(book,e)}
            />       	
            </div>
          </div>

		)	
	}
}          

export default SearchPage

