import React from 'react'

export default function CartHeader (): JSX.Element {
  return (
    <>
      <h1 className="main">Shopping cart</h1>
      <ul className="products-list table-head">
        <li className="products-list-title row">
          <div className="col-product">Product details</div>
          <div className="col-quantity">Quantity</div>
          <div className="col-price">Price</div>
          <div className="col-total">Total</div>
          <div className="col-actions"></div>
        </li>
      </ul>
    </>
  )
}
