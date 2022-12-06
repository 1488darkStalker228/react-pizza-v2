import React from 'react'
import styles from './Search.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchValue } from '../../store/slices/search'

const Search = () => {
  const { search } = useSelector((state) => state.search)
  const dispatch = useDispatch()

  return (
    <div>
      <input
        placeholder='Поиск'
        value={search}
        onChange={(e) => dispatch(getSearchValue(e.target.value))}
      />
    </div>
  )
}

export default Search
