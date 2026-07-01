import { useState } from 'react'
import { Link } from 'react-router-dom'
import { treats, categories, type Category } from '../data/menu'
import { useCart } from '../context/CartContext'

function Menu() {
    const [active, setActive] = useState<Category | 'all'>('all')
    const { items, addItem, increment, decrement } = useCart()

    const visibleTreats = 
        active === 'all' ? treats : treats.filter((treat) => treat.category === active)

    return (
        <div className = "mx-auto max-w-5xl px-6 py-20">
            <Link to="/" className="text-sm font-semibold text-moss-600 hover:underline">
            &larr; Back to Home
            </Link>

            <h1 className="mt-6 text-4xl font-extrabold text-mauve-500 sm:text-5xl">
                Our Menu
            </h1>
            <p className="mt-4 max-w-xl text-lg text-moss-600">
                Pick a category to see what Lisa &amp; Rebekah are making.
            </p>
            {/*filter buttons*/}
            <div className="mt-8 flex flex-wrap gap-3">
                {categories.map((category) => (
                    <button
                    key={category.id}
                    onClick={()=> setActive(category.id)}
                    className={
                        active === category.id
                        ? 'rounded-full bg-moss-600 px-5 py-2 text-sm font-semibold text-cream'
                        : 'rounded-full border border-moss-600/30 px-5 py-2 text-sm font-semibold text-moss-600 hover:bg-moss-600/10'
                    }
                    >
                    {category.label}
                    </button>
                ))}
            </div>
             {/* Treat cards */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleTreats.map((treat) => {
          const cartItem = items.find((item) => item.treat.id === treat.id)
          const quantity = cartItem ? cartItem.quantity : 0
          return (
            <div
              key={treat.id}
              className="flex flex-col rounded-3xl bg-white/70 p-6 shadow-md ring-1 ring-truffle-800/5"
            >
              <div className="text-4xl">{treat.emoji}</div>
              <h2 className="mt-3 text-xl font-bold text-truffle-800">{treat.name}</h2>
              <p className="mt-2 text-sm text-moss-600">{treat.description}</p>
              <div className="mt-4">
                {quantity === 0 ? (
                  <button
                    onClick={() => addItem(treat)}
                    className="rounded-full bg-moss-600 px-4 py-2 text-sm font-semibold text-cream hover:bg-moss-800"
                  >
                    Add to request
                  </button>
                ) : (
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decrement(treat.id)}
                      className="h-8 w-8 rounded-full border border-moss-600/40 text-lg font-bold text-moss-600 hover:bg-moss-600/10"
                    >
                      &minus;
                    </button>
                    <span className="min-w-6 text-center font-semibold text-truffle-800">
                      {quantity}
                    </span>
                    <button
                      onClick={() => increment(treat.id)}
                      className="h-8 w-8 rounded-full border border-moss-600/40 text-lg font-bold text-moss-600 hover:bg-moss-600/10"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}


export default Menu