import create from 'zustand'
import { IState } from '@/interfaces'
import { initialData } from '@/data/index'
import { Checkout } from '@/lib/Checkout'

const { products } = initialData
const localProducts = localStorage.getItem('products')
  ? JSON.parse(localStorage.getItem('products') as string)
  : products

const useStore = create<IState>((set) => ({
  order: new Checkout({ ...initialData, products: localProducts }),
  setOrder: (order) => set({ order }),
  modalOpened: false,
  modalData: undefined,

  /**
   * Handle the Quantity +- using the method Checkout:scan and set the cart/order to the state
   */
  handleQuantityProds: (code, operation) => set((state) => {
    state.order.scan(code, operation)
    return state.setOrder(new Checkout(state.order))// new instance to use as a state
  }),

  /**
   * Removes the product using the method Checkout:remove and set the cart/order to the state
   */
  handleRemoveProds: (code) => set((state) => {
    state.order.remove(code)
    return state.setOrder(new Checkout(state.order))// new instance to use as a state
  }),

  /**
   * Set the status and the data for the Popup
   */
  handlePopupOpened: (status: boolean, prod = undefined) => set(() => ({
    modalOpened: status,
    modalData: prod
  }))

}))

export default useStore
