import React from 'react'
import useStore from '@/store/store'
import AsideDiscountItem from '@/components/AsideDiscountItem'

/**
 * File: AsideSummary.tsx
 * Show the list of discounts and total values.
 * To improve: as we are storing the total & subtotal in the order object, we could avoid using of methods total() & subtotal()
 * and get the data directly with subTotalCost & totalCost
 */

export default function AsideSummary (): JSX.Element {
  const order = useStore(state => state.order)
  const showingDiscounts = order?.discounts.filter(d => d.discount !== 0)

  return (
    <aside className="summary">
      <h2 className="main">Order Summary</h2>
      <ul className="summary-items wrapper border">
        <li>
          <span className="summary-items-number">{order.itemsQuantity} Items</span>
          <span className="summary-items-price">{order.subTotalCost}<span className="currency">€</span></span>
        </li>
      </ul>
      <div className="summary-discounts wrapper-half border">
        {showingDiscounts && (
          <>
            <h3>Discounts</h3>
            <ul>
              {showingDiscounts.map((d) => {
                return <AsideDiscountItem key={d.name} {...d} />
              })}
            </ul>
          </>
        )}
      </div>
      <div className="summary-total wrapper">
        <ul>
          <li>
            <span className="summary-total-cost">Total cost</span>
            <span className="summary-total-price">{order.totalCost}€</span>
          </li>
        </ul>
        <button type="submit" className="btn-primary">Checkout</button>
      </div>
    </aside>
  )
}
