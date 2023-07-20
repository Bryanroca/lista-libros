import '../App.css'
import useListStore from '../store/store'
import { useState, useEffect } from 'react'

const ReadingList = ({ onClick }) => {
    const { list, eliminateList } = useListStore();

    const noMostrar = (cover) => {
        eliminateList(cover)
    }

    return (
        <div className="ReadingList">
            <h2>Lista de lectura</h2>
            <div className='container-List'>
                {list?.map((lista) => (
                    <div onClick={onClick} key={lista.book.cover}
                    >
                        <img
                            key={lista.book.cover}
                            onClick={() => noMostrar(lista.book.cover)}
                            className='lecture-img'
                            src={lista.book.cover}
                            alt="Cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ReadingList
