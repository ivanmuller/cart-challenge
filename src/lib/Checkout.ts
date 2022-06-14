import { getTotalCost, getSubTotalCost, getItemsQuantity } from '@/lib/basic'
import { ICheckout, IOrder, IProduct, IDiscount } from '@/interfaces'

/**
 * File: Checkout.ts
 * This is where we store the basic functionality of the whole application
 */

// Bugfixing: Force having the same name of interface.
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Checkout extends ICheckout {}

export class Checkout implements Checkout {
  constructor (order: IOrder) {
    // Constructing the same object as order param
    Object.assign(this, order)
  }

  /**
   * Scans a product adding it to the current cart/order.
   * @param code The product identifier
   * @param operation sum or substraction
   * @returns itself to allow function chaining
   */
  scan (code: string, operation: string) {
    const products = this.products.map((el) => {
      const newQantity = operation === 'sum' ? el.quantity + 1 : operation === 'subs' ? el.quantity - 1 : el.quantity
      return el.code === code ? { ...el, quantity: newQantity } : el // apply to product identifier
    })
    this.products = products
    this.subTotalCost = getSubTotalCost(products) // recalculation
    this.itemsQuantity = getItemsQuantity(products) // recalculation
    this.setDiscounts() // recalculation
    localStorage.setItem('products', JSON.stringify(this.products))
    return this
  }

  /**
   * Remove a product added to the current cart/order.
   * @param code The product identifier
   * @returns itself to allow function chaining
   */
  remove (code: string) {
    const products = this.products?.filter((el: IProduct) => el.code !== code) // get all other products
    this.products = products // assing to current cart/order
    this.subTotalCost = getSubTotalCost(products) // recalculation
    this.itemsQuantity = getItemsQuantity(products) // recalculation
    this.setDiscounts() // recalculation
    localStorage.setItem('products', JSON.stringify(this.products))
    return this
  }

  /**
   * Calculate the discounts for the current cart/order.
   * @returns itself to allow function chaining
   */
  setDiscounts () {
    const newDiscounts = this.discounts?.map((discount: IDiscount) => { // go to every discount object
      let calculatedDiscount = 0
      const productWithDiscount = this.products.find((prod: IProduct) => prod.code === discount.prodCode) // get products that match the discount.promCode
      if (productWithDiscount) {
        calculatedDiscount = discount.conditionMethod(productWithDiscount) // apply the function for discount.conditionMethod (calculate2for1 or calculate3minFor5percent)
      }
      return { ...discount, discount: calculatedDiscount } // return new object
    })
    this.discounts = newDiscounts // assing to discounts
    this.totalCost = getTotalCost(this.products, newDiscounts) // recalculation
    return this
  }

  /**
   * Returns the value of all cart/order products without the discounts applied.
   */
  subtotal () {
    return this.subTotalCost
  }

  /**
   * Returns the value of all cart/order products with the discounts applied.
   */
  total () {
    return this.totalCost
  }
}
