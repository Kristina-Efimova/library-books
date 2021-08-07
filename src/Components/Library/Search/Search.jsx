import React from 'react'
import {Button} from './Button/Button'
import {BookCard} from './BookCard/BookCard'
import S from './Search.module.css'
import searchImg from '../../../img/search.svg'
import filterImg from '../../../img/filter.svg'
import {useState} from 'react'


export const Search = ({data, changePage, page, favorites}) => {

  const [val, setVal] = useState('')

  let filteredElements = []
  let ShowList

  if (isCollectionNotEmpty(data)) {
    data.docs.forEach(element => {
      if (isBook(element) && filterByTitle(element)) {
        filteredElements.push(element)
      } else if (isAuthor(element) && filterByAuthorName(element)) {
        filteredElements.push(element)
      }
    })
    ShowList = filteredElements.map((element) =>
      <BookCard page={page} favorites={favorites} changePage={changePage} item={element} authorPhoto={element.key}
                key={element.key}
                name={element.name} title={element.title} img={element.cover_edition_key} />,
    )
  }

  function isCollectionNotEmpty(collection) {
    return collection.docs.length !== 0
  }

  function isBook(element) {
    return element.type === 'work'
  }

  function isAuthor(element) {
    return element.type === 'author'
  }

  function filterByTitle(element) {
    return element.title.toLowerCase().includes(val.toLowerCase())
  }

  function filterByAuthorName(element) {
    return element.name.toLowerCase().includes(val.toLowerCase())
  }


  return (
    <div className={S.content}>
      <form>
        <div className={S.search}>
          <img src={searchImg} alt='search' />
          <input
            placeholder='Поиск...'
            onChange={(event) => setVal(event.target.value)} />
          <Button
            onClick={() => {
              alert('Отфильтруем книги?')
            }}
          >
            <img src={filterImg} alt='filter' />
          </Button>
        </div>
      </form>
      <ul className={S.searchList}>
        {
          ShowList
        }
      </ul>
    </div>
  )
}


