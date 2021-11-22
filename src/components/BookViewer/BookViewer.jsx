import React from 'react';
import './BookViewer.css'
import Book from '../Book/Book';

const BookViewer  = (props) => {
    return ( 
        <div className="row col-align">
            <div className = "col-md-4">
                <button onClick={props.lastBook}>previous</button>
            </div>

            <div className = "col-md-4">
                <Book book={props.book} />
            </div>

            <div className = "col-md-4">
                <button onClick={props.nextBook}>Next</button>
            </div>

        </div>
     );
}

export default BookViewer;