import * as BooksAPI from '../BooksAPI'
import {Link} from 'react-router-dom'
import { Component } from 'react/cjs/react.production.min';
import Book from './Book';


class Search extends Component{

  state={
    query:'',
    searchedBooks:[]
  }
  updateQuery=(query)=>{
    let spaceQuery=query.replace(/^\s+/,'')
    this.setState({query:spaceQuery})
    this.fetchSearchedBooks(query)
  }
  fetchSearchedBooks=(query)=>{
    if (query.length!==0){
      BooksAPI.search(query).then((searchedBooks)=>{
        if(searchedBooks.error){
          this.setState({searchedBooks:[]})
        }else{this.setState({searchedBooks:searchedBooks})}
      })
    }else{this.setState({searchedBooks:[]})}
  }
  render(){
   

    return(

      <div className='search-books'>
        <div className='search-books-bar'>
        <Link className="close-search" to="/">
            Close
          </Link>
          <div className='search-books-input-wrapper'>
            <input type= 'text' placeholder="Search by title or author" value={this.state.query} onChange={(o)=>this.updateQuery(o.target.value)}></input>
          </div>

        </div>
        <div className='search-books-results'>
          <ol className='books-grid'>
            {this.state.searchedBooks.map(searchedBook=>{
              let shelf ="none"
              this.props.books.forEach(book=>{
                if(book.id !==searchedBook.id){
                  searchedBook.shelf="none"
                }else{shelf=book.shelf}
              })
              return(
                <li key={searchedBook.id}>
                  <Book book={searchedBook} shelfChange={this.props.shelfChange} currentShelf={shelf}></Book>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search;


//functional component

// import { useState } from 'react';


// function Search(props){

//   const [query,setQuery]=useState("");
//   const [searchedBooks,setSearchedBooks]=useState([]);
  
//   const updateQuery=(query)=>{
//     let spaceQuery=query.replace(/^\s+/,'')
//     setQuery({query:spaceQuery})
//     fetchSearchedBooks(query)
//   }
//   const fetchSearchedBooks=(query)=>{
//     if (query.length!==0){
//       BooksAPI.search(query).then((searchedBooks)=>{
//         if(searchedBooks.error){
//           setSearchedBooks({searchedBooks:[]})
//         }else{setSearchedBooks({searchedBooks:searchedBooks})}
//       })
//     }else{setSearchedBooks({searchedBooks:[]})}
//   }
  
   

//     return(

//       <div className='search-books'>
//         <div className='search-books-bar'>
//         <Link className="close-search" to="/">
//             Close
//           </Link>
//           <div className='search-books-input-wrapper'>
//             <input type= 'text' placeholder="Search by title or author" value={query} onChange={(o)=>updateQuery(o.target.value)}></input>
//           </div>

//         </div>
//         <div className='search-books-results'>
//           <ol className='books-grid'>
//             {searchedBooks.map(searchedBook=>{
//               let shelf ="none"
//               props.books.forEach(book=>{
//                 if(book.id !==searchedBook.id){
//                   searchedBook.shelf="none"
//                 }else{shelf=book.shelf}
//               })
//               return(
//                 <li key={searchedBook.id}>
//                   <Book book={searchedBook} shelfChange={props.shelfChange} currentShelf={shelf}></Book>
//                 </li>
//               )
//             })}
//           </ol>
//         </div>
//       </div>
//     )
  
// }

// export default Search;