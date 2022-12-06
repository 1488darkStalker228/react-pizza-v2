import React, { useEffect, useState } from 'react'
import Categories from '../../components/Categories/Categories'
import Sort from '../../components/Sort/Sort'
import PizzaBlock from '../../components/PizzaBlock/PizzaBlock'
import Skeleton from '../../components/Skeleton'
import styles from './Main.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getPizzas } from '../../store/slices/pizzas'

const Main = () => {
  const [propertyForGetPizzas, setPropertyForGetPizzas] = useState({
    categoryId: 0,
    propertyForSort: 'rating',
    orderForSort: 'asc',
  })

  const { pizzas, isLoading, error } = useSelector((state) => state.pizzas)
  const { search } = useSelector((state) => state.search)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPizzas(propertyForGetPizzas))
  }, [dispatch, propertyForGetPizzas])

  return (
    <>
      <div className={styles.top}>
        <Categories
          setCategoryId={(categoryId) =>
            setPropertyForGetPizzas({ ...propertyForGetPizzas, categoryId })
          }
        />
        <Sort
          setSortProperty={({ propertyForSort, orderForSort }) =>
            setPropertyForGetPizzas({
              ...propertyForGetPizzas,
              propertyForSort,
              orderForSort,
            })
          }
        />
      </div>
      <h2 className={styles.title}>Все пиццы</h2>
      <div className={styles.items}>
        {error ? (
          <h1>Произошла ошибка!</h1>
        ) : isLoading ? (
          [...new Array(10)].map((_, index) => <Skeleton key={index} />)
        ) : (
          pizzas.map((pizza) => <PizzaBlock {...pizza} key={pizza.id} />)
        )}
      </div>
    </>
  )
}

export default Main
