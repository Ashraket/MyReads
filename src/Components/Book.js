import React from "react";
import { Component } from "react/cjs/react.production.min";


function Book(props) {

    
    
        let cover 
        if(props.book.imageLinks){
            cover=props.book.imageLinks.thumbnail
        }else{
            cover=''
        }
        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{width:128,height:193,backgroundImage:`url("${cover}")`}}></div>
                    <div className="book-shelf-changer">
                    <select  onChange={(o) => props.shelfChange(props.book, o.target.value)} value={props.currentShelf}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{props.book.title}</div>
                <div className="book-authors">{props.book.authors}</div>


            </div>


        )
    
}
export default Book;