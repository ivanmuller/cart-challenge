import React from 'react'
import { IProduct } from '@/interfaces'
import useStore from '@/store/store'
import { iconTrash } from '@/img'

/**
 * File: CartItem.tsx
 * Show the product item with an additional option column to remove the whole row.
 */

export function CartItem ({ item }: { item: IProduct}): JSX.Element {
  const handleQuantityProds = useStore(state => state.handleQuantityProds)
  const handleRemoveProds = useStore(state => state.handleRemoveProds)
  const handlePopupOpened = useStore(state => state.handlePopupOpened)
  const { thumb, name, internalCode, quantity, code, price } = item
  return (
    <li className="product row">
      <div className="col-product" role="button" onClick={() => handlePopupOpened(true, item)}>
        <figure className="product-image">
          <a role="button" onClick={() => handlePopupOpened(true, item)} title={'More information about ' + name}>
            <img src={thumb} alt={name} />
            <div className="product-description">
              <h1>{name}</h1>
              <p className="product-code">Product code {internalCode}</p>
            </div>
          </a>
        </figure>
      </div>
      <div className="col-quantity" data-labelcol="Quantity">
        <button className="count" onClick={() => handleQuantityProds(code, 'subs')} disabled={quantity === 1} aria-label='Remove One'>-</button>
        <label htmlFor={code} aria-hidden={false} className="a11y-hidden">Quantity for {name}</label>
        <input id={code} type="number" className="product-quantity" value={quantity} readOnly={true} />
        <button className="count" onClick={() => handleQuantityProds(code, 'sum')} aria-label='Add One'>+</button>
      </div>
      <div className="col-price" data-labelcol="Price">
        <span className="product-price">{price}</span>
        <span className="product-currency currency">€</span>
      </div>
      <div className="col-total" data-labelcol="Total">
        <span className="product-price">{quantity * price}</span>
        <span className="product-currency currency">€</span>
      </div>
      <div className="col-actions">
        <button className="trash" onClick={() => handleRemoveProds(code)} aria-label={`Remove Product ${name}`}><img src={iconTrash} alt="" width="16" height="19" /></button>
      </div>
    </li>
  )
}

export default CartItem
