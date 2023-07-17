import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

export default function Home({ books, changeShelf }) {
    return <>
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div >
            <div className="list-books-content">
                <div>
                    <Shelf shelf='Currently Reading' category='currentlyReading' books={books} changeShelf={changeShelf} />
                    <Shelf shelf='Want to Read' category='wantToRead' books={books} changeShelf={changeShelf} />
                    <Shelf shelf='Read' category='read' books={books} changeShelf={changeShelf} />
                </div>
            </div>
        </div>
        <div className="open-search">
            <Link to={'search'} className='open-search-link'>Add a book</Link>
        </div>
    </>
}
