import { createContext, ReactNode, useState } from 'react'

export interface IProduct {
  id: string
  name: string
  description?: string
  price: string
  imageUrl: string
  numberPrice: number
  defaultPriceId: string
}

interface CartContextData {
  cartItems: IProduct[]
  cartTotal: number
  addToCart: (product: IProduct) => void
  checkIfItemAlreadyExists: (productId: string) => boolean
  removeCartItem: (productId: string) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextData)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<IProduct[]>([])

  const cartTotal = cartItems.reduce((acc, product) => {
    return acc + product.numberPrice!
  }, 0)

  function addToCart(product: IProduct) {
    setCartItems((state) => [...state, product])
  }

  function removeCartItem(productId: string) {
    setCartItems((state) => state.filter((product) => product.id !== productId))
  }

  function checkIfItemAlreadyExists(productId: string) {
    return cartItems.some((product) => product.id === productId)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartTotal,
        addToCart,
        checkIfItemAlreadyExists,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
