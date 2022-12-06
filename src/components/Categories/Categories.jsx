import React, { useEffect, useState } from 'react'
import styles from './Categories.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../store/slices/categories'

const Categories = ({ setCategoryId }) => {
  const { categories } = useSelector((state) => state.categories)
  const dispatch = useDispatch()
  const [active, setActive] = useState(0)

  function getCategoryId(categoryId) {
    setActive(categoryId)
    setCategoryId(categoryId)
  }

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  return (
    <div className={styles.root}>
      <ul className={styles.items}>
        {categories.map((category) => (
          <li
            className={`${styles.item} ${
              active === category.categoryId ? styles.active : ''
            }`}
            key={category.title}
            onClick={() => getCategoryId(category.categoryId)}
          >
            {category.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
