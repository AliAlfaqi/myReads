import React from 'react'
import Book from './Book'


export default function Shelf({ shelf, category, books, changeShelf }) {


    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.filter((book) => book.shelf === category)
                        .map((book, index) => <Book book={book} key={index} changeShelf={changeShelf} />)}
                </ol>
            </div>
        </div>
    )
}
