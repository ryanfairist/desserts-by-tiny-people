import {createContext, useContext, useState, type ReactNode } from 'react'
import type { Treat } from '../data/menu'

export type CartItem = {
    treat: Treat
    quantity: number
}

type CartContextValue ={
    items: CartItem[]
    addItem:(treat: Treat) => void
    removeItem: (id: number) => void
    increment: (id: number) => void
    decrement: (id: number) => void
    clear: ()=> void
    totalCount: number
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

export function CartProvider({children}: {children: ReactNode}) {
    const [items, setItems] = useState<CartItem[]>([])
    
    function addItem(treat: Treat) {
        setItems((prev) => {
            const existing = prev.find((item) => item.treat.id === treat.id)
            if (existing) {
                return prev.map((item) =>
                    item.treat.id === treat.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            } 
            return [...prev, { treat, quantity: 1}]
        })
    }

    function removeItem(id: number) {
        setItems((prev) => prev.filter((item) => item.treat.id !== id))
    }

    function increment(id: number) {
        setItems ((prev) =>
        prev.map((item) =>
        item.treat.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
    )
}

function decrement(id: number) {
    setItems((prev) =>
    prev.map((item) =>
    item.treat.id === id ? { ...item, quantity: item.quantity + 1 } :item
    )
    .filter((item) => item.quantity > 0)
    )
    
}

function clear() {
    setItems([])
}
 const totalCount = items.reduce((sum, item) => sum + item.quantity, 0)

 return(
    <CartContext.Provider
        value={{ items, addItem, removeItem, increment, decrement, clear, totalCount}}
    >
        {children}
    </CartContext.Provider>

 )
}

export function useCart() {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}