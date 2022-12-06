import React, { useState } from 'react'
import styles from './Sort.module.scss'

const Sort = ({ setSortProperty }) => {
  const propertiesForSort = [
    {
      title: 'Популярности ASC',
      propertyForSort: 'rating',
      orderForSort: 'asc',
    },
    {
      title: 'Популярности DESC',
      propertyForSort: 'rating',
      orderForSort: 'desc',
    },
    { title: 'Цене ASC', propertyForSort: 'price', orderForSort: 'asc' },
    { title: 'Цене DESC', propertyForSort: 'price', orderForSort: 'desc' },
    { title: 'Алфавиту ASC', propertyForSort: 'title', orderForSort: 'asc' },
    { title: 'Алфавиту DESC', propertyForSort: 'title', orderForSort: 'desc' },
  ]

  const [selectedProperty, setSelectedProperty] = useState(
    propertiesForSort[0].title
  )
  const [showSortPopup, setShowSortPopup] = useState(false)

  function getSortProperty(property) {
    setSelectedProperty(property.title)
    setSortProperty(property)
    setShowSortPopup(!showSortPopup)
  }

  return (
    <div
      className={styles.root}
      onClick={() => setShowSortPopup(!showSortPopup)}
    >
      <div>
        <svg
          width='10'
          height='6'
          viewBox='0 0 10 6'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
            fill='#2C2C2C'
          />
        </svg>
        <b>Сортировка по:</b>
      </div>
      <span className={styles.selected}>{selectedProperty}</span>
      {showSortPopup && (
        <div className={styles.popup}>
          <ul>
            {propertiesForSort.map((property) => (
              <li
                className={
                  property.title === selectedProperty ? styles.active : ''
                }
                onClick={() => getSortProperty(property)}
                key={property.title}
              >
                {property.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Sort
