import { Component } from "react/cjs/react.production.min";
import Search from "./Components/Search";
import BookList from './Components/BookList';

import "./App.css";
import * as BooksAPI from './BooksAPI'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { useEffect } from "react";
import { useState } from "react";

// function App(props) {

//   const [books,setBooks]=useState([]);
//   // state={
//   //   books:[]
//   // }
//   // componentDidMount(){
//   //   BooksAPI.getAll().then((books) => {setBooks({books: books})})
//   // }

//   useEffect(()=>{
//     let mounted=true;
//     BooksAPI.getAll().then(books => {if(mounted){setBooks({books: books})}})
//     return()=>mounted=false;
//   })
//   const shelfChange=(book, shelf)=>{
//     BooksAPI.update(book,shelf)
//     BooksAPI.getAll().then((books)=>{setBooks({books:books})})

//   }

  
//     return(
//       <div className="app">
//         <BrowserRouter>
//         <Routes>
//         <Route exact path="/" element={<BookList  books={books} shelfChange={shelfChange}/>}
//         />
//       <Route exact path="/search" element={ <Search shelfChange={shelfChange} books={books}></Search> }/>
//         </Routes>
//       </BrowserRouter>
      
//       </div>
//     )
  
// }

// export default App;

class App extends Component{

  state={
    books:[]
  }
  componentDidMount(){
    BooksAPI.getAll().then((books) => {this.setState({books: books})})
  }
  shelfChange=(book, shelf)=>{
    BooksAPI.update(book,shelf)
    BooksAPI.getAll().then((books)=>{this.setState({books:books})})

  }

  render(){
    return(
      <div className="app">
        <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<BookList  books={this.state.books} shelfChange={this.shelfChange}/>}
        />
      <Route exact path="/search" element={ <Search shelfChange={this.shelfChange} books={this.state.books}></Search> }/>
        </Routes>
      </BrowserRouter>
      
      </div>
    )
  }
}

export default App;
