import React from 'react';
import { Link } from 'react-router-dom';
import SearchShelf from './SearchShelf';


export default function Search({ useSearch, search, searchResult, changeShelf, noResult }) {

    return <>
        <div className="search-books">
            <div className="search-books-bar">
                <Link
                    className="close-search"
                    to={'/'}
                >
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        onChange={useSearch}
                    />
                </div>
            </div>
            <SearchShelf searchResult={searchResult} changeShelf={changeShelf} noResult={noResult} />
        </div>
    </>
}
