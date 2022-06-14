import React, { useState, useEffect } from 'react'
import { IDiscount } from '@/interfaces'

/**
 * File: AsideDiscountItem.tsx
 * A small component to handle a slight animation when a discount changes
 */

export default function DiscountItem ({ name, discount }: IDiscount) {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    setAnimated(true)
    const removeClass = setTimeout(() => {
      setAnimated(false)
    }, 600)
    return () => clearTimeout(removeClass)
  }, [discount])

  return (
    <li className={animated ? 'shockwave' : ''}><span>{name}</span><span>{discount}€</span></li>
  )
}
