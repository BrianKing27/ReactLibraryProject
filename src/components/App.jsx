import React, { Component } from 'react';
import './App.css';
import TitleBar from './TitleBar/TitleBar';
import BookViewer from './BookViewer/BookViewer';

class App extends Component {
    constructor(props) {
        super(props);
        this.books = [
            {title: 'Pillars of The Earth', author: "Ken Follet"},
            {title: "Ready Player One", author: "Ernest Cline"},
            {title: "Game of Thrones", author: "J.R.R. Martin"},
            {title: "Lord of the Rings: The FellowShip of The Ring" , author: "J.R.R. Tolkien"},
            {title: "Lord of the Rings: The Two Towers" , author: "J.R.R. Tolkien"},
            {title: "Lord of the Rings: The Return of The King" , author: "J.R.R. Tolkien"},
            {title: "The Hobbit: An Unexpected Journey", author: "J.R.R. Tolkien"},
            {title: "The Hobbit: The Desolation of Smaugg", author: "J.R.R. Tolkien"},
            {title: "The Hobbit: The Battle of The Five Armies", author: "J.R.R. Tolkien"},
        ];
        this.state = {
            bookNumber: 0
        };
    }


    goToNextBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber++;
        if(tempBookNumber === this.books.length){
            tempBookNumber = 0;
        }
        this.setState({
            bookNumber: tempBookNumber
        });
    }

    goToLastBook = () => {
        let newBookNumber = this.state.bookNumber;
        newBookNumber--;
        if(newBookNumber < 0){
            newBookNumber = this.books.length - 1 ;
        }
        this.setState({
            bookNumber: newBookNumber
        });

    }

    render(){
        return(
            <div className="container-fluid">
                <TitleBar />
                <BookViewer book={this.books[this.state.bookNumber]} nextBook = {this.goToNextBook} lastBook = {this.goToLastBook} />
            </div>
        )
    }

}
export default App;


