import React from 'react'
import styles from './Cart.module.scss'
import cart from '../../assets/icons/cart.svg'
import cartClear from '../../assets/icons/cartClear.svg'
import removeItem from '../../assets/icons/removeItem.svg'

const Cart = () => {
  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <div className={styles.title}>
          <img width='38' src={cart} alt='cart' />
          <h2>Корзина</h2>
        </div>
        <div className={styles.clear}>
          <img width='38' src={cartClear} alt='cart' />
          <span>Очистить корзину</span>
        </div>
      </div>
      <div className={styles.items}>
        <div className={styles.item}>
          <div className={styles.info}>
            <img
              className={styles.img}
              src='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg'
              alt='Pizza'
            />
            <div className='cart__item-info'>
              <h3>Сырный цыпленок</h3>
              <p>тонкое тесто, 26 см.</p>
            </div>
          </div>
          <div className={styles.quantity}>
            <div className='button button--outline button--circle cart__item-count-minus'>
              <svg
                width='10'
                height='10'
                viewBox='0 0 10 10'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z'
                  fill='#EB5A1E'
                />
                <path
                  d='M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z'
                  fill='#EB5A1E'
                />
              </svg>
            </div>
            <b>2</b>
            <div className='button button--outline button--circle cart__item-count-plus'>
              <svg
                width='10'
                height='10'
                viewBox='0 0 10 10'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z'
                  fill='#EB5A1E'
                />
                <path
                  d='M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z'
                  fill='#EB5A1E'
                />
              </svg>
            </div>
          </div>
          <div className={styles.price}>
            <b>770 ₽</b>
          </div>
          <div className={styles.remove}>
            <div className='button button--outline button--circle'>
              <img src={removeItem} alt='removeItem' />
            </div>
          </div>
        </div>
      </div>
      <div className='cart__bottom'>
        <div className='cart__bottom-details'>
          <span>
            {' '}
            Всего пицц: <b>3 шт.</b>{' '}
          </span>
          <span>
            {' '}
            Сумма заказа: <b>900 ₽</b>{' '}
          </span>
        </div>
        <div className='cart__bottom-buttons'>
          <a
            href='/'
            className='button button--outline button--add go-back-btn'
          >
            <svg
              width='8'
              height='14'
              viewBox='0 0 8 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7 13L1 6.93015L6.86175 1'
                stroke='#D3D3D3'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>

            <span>Вернуться назад</span>
          </a>
          <div className='button pay-btn'>
            <span>Оплатить сейчас</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
