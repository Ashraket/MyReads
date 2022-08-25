import {Link} from 'react-router-dom'
import { Component } from "react/cjs/react.production.min";
import Book from "./Book";

function BookList(props) {

    
        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Reads</h1>
                </div>
                <div className="list-book-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {props.books.filter(book=>book.shelf==='currentlyReading')
                                    .map(book=>(<li key={book.id}><Book book={book} shelfChange={props.shelfChange} currentShelf="currentlyReading"></Book></li>))}
                                </ol>
                            </div>
                        </div>

                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want To Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {props.books.filter(book=>book.shelf==='wantToRead')
                                    .map(book=>(<li key={book.id}><Book book={book} shelfChange={props.shelfChange} currentShelf="wantToRead"></Book></li>))}
                                </ol>
                            </div>
                        </div>

                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {props.books.filter(book=> book.shelf ==='read')
                                    .map(book => (<li key={book.id}><Book book={book} shelfChange={props.shelfChange} currentShelf="read"/></li>))}
                                </ol>
                            </div>
                        </div>



                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">seacrh book</Link>

                </div>
            </div>
        )
    


}

export default BookList