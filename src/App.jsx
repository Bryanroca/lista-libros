import React, { useState, useEffect } from 'react';
import booksData from './books.json';
import './App.css';
import Books from './components/books'
import ReadingList from './components/readinglist'
import useListStore from './store/store';

function App() {
  const [books, setBooks] = useState(booksData.library);
  const { list } = useListStore();
  const [width, setWidth] = useState(800);
  const [value, setValue] = useState(null)
  const bookCount = Object.keys(books).length;
  const [isselected, setIsselected] = useState(false)

  const blur = (e) => {
    const books = document.querySelectorAll(".img-container")
    books.forEach(book => {
      //console.log(book.getAttribute("src"))
      if (book.getAttribute("src") === e.target.getAttribute("src") && book.classList.contains("blurred")) {
        book.classList.remove("blurred")
      }
    })
  }

  const changeWidth = (event) => {
    const selectedWidth = event.target.value;
    setWidth(selectedWidth);

    if (value === "Terror") {
      const filteredBooks = booksData.library.filter(book => book.book.genre === value && book.book.pages <= selectedWidth);
      setBooks(filteredBooks);
    }
    else if (value === "Ciencia ficción") {
      const filteredBooks = booksData.library.filter(book => book.book.genre === value && book.book.pages <= selectedWidth);
      setBooks(filteredBooks);
    }
    else if (value === "Zombies") {
      const filteredBooks = booksData.library.filter(book => book.book.genre === value && book.book.pages <= selectedWidth);
      setBooks(filteredBooks);
    }
    else {
      const filteredBooks = booksData.library.filter(book => book.book.pages <= selectedWidth);
      setBooks(filteredBooks);
    }
  };


  const filterscience = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "Ciencia ficción") {
      const filteredBooks = booksData.library.filter(book => book.book.genre === selectedValue);
      setValue("Ciencia ficción")
      setBooks(filteredBooks);
    }
    if (selectedValue === "Todos") {
      const filteredBooks = booksData.library;
      setValue("Todos")
      setBooks(filteredBooks);
    }
    if (selectedValue === "Zombies") {
      const filteredBooks = booksData.library.filter(book => book.book.genre === selectedValue);
      setValue("Zombies")

      setBooks(filteredBooks);
    }
    if (selectedValue === "Terror") {
      const filteredBooks = booksData.library.filter(book => book.book.genre === selectedValue);
      setValue("Terror")
      setBooks(filteredBooks);
    }
  };

  return (
    <div className='App'>
      <div className='container'>
        <div className='container-counters'>
          <h1>{bookCount - list.length} Libros disponibles</h1>
          <h3>{list.length} en la lista de lectura</h3>
          <div className='container-paginas'>
            <div>
              <h3>Filtrar por páginas</h3>
              <input
                type='range'
                onChange={changeWidth}
                min={1}
                max={1400}
                step={1}
                value={width}
              ></input>
            </div>
            <div>
              <h3>Filtrar por género</h3>
              <select name="select" onChange={filterscience}>
                <option value="Todos">Todos</option>
                <option value="Ciencia ficción">Ciencia ficción</option>
                <option value="Zombies">Zombies</option>
                <option value="Terror">Terror</option>
              </select>
            </div>
          </div>
        </div>
        <div className='container-books'>
          <Books books={books} isselected={isselected} onClick={(e) => e.target.classList.add('blurred')} />
        </div>
      </div>
      <ReadingList bookCount={bookCount} onClick={(e) => blur(e)} />
    </div>
  );
}

export default App;
