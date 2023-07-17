import React from "react";
import "./App.css";
import * as BooksAPI from './BooksAPI'
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";

function App() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [noResult, setNoResult] = useState(false)

  useEffect(() => {
    BooksAPI.getAll().then((res) => {
      setBooks(res)
    })

  }, [])

  async function changeShelf(book, shelf) {
    await BooksAPI.update(book, shelf);
    await BooksAPI.getAll().then((res) => {
      setBooks(res)
    })
    handleBooksSearch(search)
  }

  function useSearch(e) {
    setSearch(e.target.value);
    handleBooksSearch(e.target.value);
  }

  async function handleBooksSearch(search) {
    await BooksAPI.search(search).then((res) => {
      if (res && !res.error) {
        setSearchResult(res.filter((book) => book.imageLinks.smallThumbnail !== null).filter((book) => book.authors !== null)
          .map((booksSearch) => {
            books.forEach((book) => {
              if (booksSearch.id === book.id) booksSearch.shelf = book.shelf
            })
            return booksSearch;
          }));
        setNoResult(true);
      }
      else {
        setNoResult(false)
      }
    })
  }

  const routers = createBrowserRouter([
    { path: '/', element: <Home books={books} changeShelf={changeShelf} /> },
    { path: 'search', element: <Search useSearch={useSearch} search={search} searchResult={searchResult} changeShelf={changeShelf} noResult={noResult} /> }
  ])

  return (
    <div className="app">

      <RouterProvider router={routers} />
    </div >
  );
}

export default App;
