import React from 'react'
import Popup from 'reactjs-popup'
import useStore from '@/store/store'
import { iconClose } from '@/img'

/**
 * File: CartItemPopup.tsx
 * Handle the Modal using the global state data and status, that change when product is clicked
 */

export function CartItemPopup (): JSX.Element {
  const modalOpened = useStore(state => state.modalOpened)
  const modalData = useStore(state => state.modalData)
  const handlePopupOpened = useStore(state => state.handlePopupOpened)

  return (
    <Popup open={modalOpened} onClose={() => handlePopupOpened(false)} modal nested>
      <div className="product-detail">
        <button className="close" onClick={() => handlePopupOpened(false)} aria-label="Close">
          <img src={iconClose} alt="" width="14" height="14" />
        </button>
        <div className="img-wrap">
          <img src={modalData?.image} alt={modalData?.name} />
        </div>
        <div className="product-detail-col">
          <h2 className="main">
            <span>{modalData?.name}</span>
            <span>{modalData?.price}€</span>
          </h2>
          <div className="product-description">{modalData?.description} hdp</div>
          <p className="product-code">Product code {modalData?.internalCode}</p>
          <button type="submit" className="btn-primary">Add to Cart</button>
        </div>
      </div>
    </Popup>
  )
}

export default CartItemPopup
