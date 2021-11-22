import React from 'react';
import './BookViewer.css'

const BookViewer  = (props) => {
    return ( 
        <div className="row col-align">

            <div className = "col-md-4">
                <button onClick={props.lastBook}>previous</button>
            </div>

            <div className = "col-md-4">
                <h1>{props.book.title}</h1>
                <h4>{props.book.author}</h4>
            </div>

            <div className = "col-md-4">
                <button onClick={props.nextBook}>Next</button>
            </div>

        </div>
     );
}

export default BookViewer;