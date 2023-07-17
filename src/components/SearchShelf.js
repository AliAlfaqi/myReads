import React from 'react';
import Book from './Book';

export default function SearchShelf({ searchResult, changeShelf, noResult }) {

    return <>
        <div className="search-books-results">
            <ol className="books-grid">
                {noResult ? searchResult.map((book, index) => <Book key={index} book={book} changeShelf={changeShelf} />) : ''}
            </ol>
        </div>
    </>
}
