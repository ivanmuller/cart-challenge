import React, { useEffect } from 'react'
import useStore from '@/store/store'
import { Checkout } from '@/lib/Checkout'
import CartList from '@/components/CartList'
import CartHeader from '@/components/CartHeader'
import AsideSummary from '@/components/AsideSummary'
import { CartItemPopup } from '@/components/CartItemPopup'

/**
 * File: App.tsx
 * Main Component for Layout
 * Manage an instance of Checkout (from store) with the initial cart/order and create new instances to force refreshing the state
 * Logic of handlers is available in store file
 */

function App (): JSX.Element {
  const order = useStore(state => state.order)
  const setOrder = useStore(state => state.setOrder)

  /**
   * Calculate discounts at the beggining
   */
  useEffect(() => {
    order.setDiscounts()
    setOrder(new Checkout(order))
  }, [])

  return (
    <main className="App">
      <section className="products">
        <CartHeader />
        <CartList />
      </section>
      <AsideSummary />
      <CartItemPopup />
    </main>
  )
}

export default App
