import { IProduct, IDiscount } from '@/interfaces'

/**
 * File: Basic.ts
 * Where we store the basic functionality of the whole application
 */

export const getSubTotalCost = (array: IProduct[]) => {
  return array.reduce((acc, el) => {
    return acc + (el.price * el.quantity)
  }, 0)
}

export const getTotalDiscounts = (array: IDiscount[]) => {
  return array.reduce((acc, el) => {
    return acc + el.discount
  }, 0)
}

export const getTotalCost = (prods: IProduct[], discounts: IDiscount[]) => {
  return getSubTotalCost(prods) + getTotalDiscounts(discounts)
}

export const getItemsQuantity = (array: IProduct[]) => {
  return array.reduce((acc, el) => {
    return acc + el.quantity
  }, 0)
}

/**
 * Function that caclulates 2x1 discount.
 * If quantity is odd, it substracts 1 item to calculate the discount
 * The result is forced to a negative number
 */
export const calculate2for1 = ({ quantity, price }: IProduct) => {
  if (quantity < 2) return 0
  return -((quantity % 2) ? ((quantity - 1) * price) / 2 : ((quantity * price) / 2))
}

/**
 * Function that caclulates 5 percent discount.
 * The result is forced to a negative number
 */
export const calculate3minFor5percent = ({ quantity, price }: IProduct) => {
  if (quantity < 3) return 0
  return -(quantity * price * 0.05)
}
