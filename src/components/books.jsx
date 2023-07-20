import React, { useState } from 'react';
import '../App.css';
import useListStore from '../store/store';

const Books = ({ books, isselected, onClick }) => {
    const { list, addToList } = useListStore();

    const position = (cover) => {

        const clickedBook = books.find((data) => data.book.cover === cover);
        if (!list.some((current) => current.book.ISBN === clickedBook.book.ISBN)) {
            addToList(clickedBook);
        }

    };

    return (
        <div id='booklist'>
            {books.map((book) => (
                <div
                    onClick={onClick}
                    key={book.book.cover}
                    className={`book-container`}
                >
                    <img
                        src={book.book.cover}
                        onClick={() => position(book.book.cover)}
                        className="img-container"
                        alt="Book Cover"
                    />
                </div>
            ))}
        </div>
    );
};

export default Books;
