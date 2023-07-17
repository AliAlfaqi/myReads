import React from 'react'

export default function Book({ book, changeShelf }) {

    function updateShelf(e) {
        changeShelf(book, e.target.value)
    }

    return <>
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 188,
                            backgroundImage:
                                `url(${book.imageLinks.smallThumbnail})`,
                        }}
                    ></div>
                    <div className="book-shelf-changer">
                        <select onChange={updateShelf} value={book.shelf}>
                            <option value="move" disabled>
                                Move to...
                            </option>
                            <option value="currentlyReading">
                                Currently Reading
                            </option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
                <div className="current-shelf">{book.shelf ? book.shelf : ''}</div>
            </div>
        </li>
    </>
}
