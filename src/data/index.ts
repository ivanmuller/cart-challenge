import { imgTshirtThumb, imgCapThumb, imgSkirtThumb, imgTshirt, imgCap, imgSkirt } from '@/img'
import { calculate2for1, calculate3minFor5percent } from '@/lib/basic'
import { IProduct } from '@/interfaces'

/**
 * File: data/index.ts
 * This is the initial data required to land in the checkoutpage
 * To Improve: assuming this could be retrieved form a database, the data should be a json object and then be joined with the current cart.
 */

export const initialData = {
  products: [
    {
      code: 'TSHIRT',
      internalCode: 'X7R2OPX',
      name: 'Shirt',
      image: imgTshirt,
      thumb: imgTshirtThumb,
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
      price: 20,
      quantity: 3,
      enabled: true
    },
    {
      code: 'SKIRT',
      internalCode: 'X2G2OPZ',
      name: 'Skirt',
      image: imgSkirt,
      thumb: imgSkirtThumb,
      description: 'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.',
      price: 5,
      quantity: 4,
      enabled: true
    },
    {
      code: 'CAP',
      internalCode: 'X3W2OPY',
      name: 'Cap',
      image: imgCap,
      thumb: imgCapThumb,
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat. Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat.Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla quis nibh. Quisque a lectus.Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.',
      price: 10,
      quantity: 4,
      enabled: true
    }
  ],
  discounts: [
    {
      prodCode: 'SKIRT',
      name: '2x1 Skirt offer',
      conditionMethod: (prod: IProduct) => calculate2for1(prod),
      description: 'Buy two for the price of 1!',
      discount: 0
    },
    {
      prodCode: 'TSHIRT',
      name: 'x3 Shirt offer',
      conditionMethod: (prod: IProduct) => calculate3minFor5percent(prod),
      description: 'Buy 3 or more and and Get %5 discount on each one',
      discount: 0
    }
  ],
  itemsQuantity: 11,
  subTotalCost: 120,
  totalCost: 120
}
