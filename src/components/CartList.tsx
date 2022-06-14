import React from 'react'
import CartItem from '@/components/CartItem'
import useStore from '@/store/store'

/**
 * File: CartList.tsx
 * Show the list of products or a message of "no results" with possibility to restart the demo data.
 */

function CartList (): JSX.Element {
  const order = useStore(state => state.order)

  const restartInitialData = () => {
    localStorage.removeItem('products')
    window.location.reload()
  }

  const { products } = order
  return (
    <ul className="products-list">
      {products.length > 0
        ? (
            products.map((item) => {
              return (
                <CartItem key={item.code} item={item} />
              )
            })
          )
        : (
          <li>
            <p>Shopping cart is empty</p><br />
            <button className="btn-primary btn-small" onClick={restartInitialData}>Restart Demo Data</button>
          </li>
          )}
    </ul>
  )
}

export default CartList
