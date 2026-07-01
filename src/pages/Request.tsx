import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Request() {
  const { items, increment, decrement, removeItem, clear, totalCount } = useCart()

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Link to="/menu" className="text-sm font-semibold text-moss-600 hover:underline">
        &larr; Back to Menu
      </Link>

      <h1 className="mt-6 text-4xl font-extrabold text-mauve-500 sm:text-5xl">
        Your Request
      </h1>

      {items.length === 0 ? (
        <p className="mt-6 text-lg text-moss-600">
          Your request list is empty.{' '}
          <Link to="/menu" className="font-semibold underline">
            Browse the menu
          </Link>{' '}
          to add some treats!
        </p>
      ) : (
        <>
          <ul className="mt-8 space-y-4">
            {items.map((item) => (
              <li
                key={item.treat.id}
                className="flex items-center gap-4 rounded-3xl bg-white/70 p-4 shadow-sm ring-1 ring-truffle-800/5"
              >
                <span className="text-3xl">{item.treat.emoji}</span>
                <div className="flex-1">
                  <h2 className="font-bold text-truffle-800">{item.treat.name}</h2>
                  <p className="text-sm text-moss-600">{item.treat.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decrement(item.treat.id)}
                    className="h-8 w-8 rounded-full border border-moss-600/40 text-lg font-bold text-moss-600 hover:bg-moss-600/10"
                  >
                    &minus;
                  </button>
                  <span className="min-w-6 text-center font-semibold text-truffle-800">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => increment(item.treat.id)}
                    className="h-8 w-8 rounded-full border border-moss-600/40 text-lg font-bold text-moss-600 hover:bg-moss-600/10"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item.treat.id)}
                  className="text-sm font-semibold text-mauve-500 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <p className="mt-6 font-semibold text-truffle-800">
            Total treats: {totalCount}
          </p>

          {/* Call instructions */}
          <div className="mt-8 rounded-3xl bg-peach-100 p-6">
            <h2 className="text-xl font-bold text-truffle-800">
              Ready to request these treats?
            </h2>
            <p className="mt-2 text-moss-600">
              Everything is made as a gift — donations are welcome at pickup or delivery.
              To place your request, please call us with your list:
            </p>
            <p className="mt-4 text-2xl font-extrabold text-mauve-500">
              📞 (555) 123-4567
            </p>
            <p className="mt-2 text-sm text-moss-600">
              We'll confirm what you'd like and arrange a pickup or delivery time.
            </p>
          </div>

          <button
            onClick={clear}
            className="mt-6 text-sm font-semibold text-moss-600 hover:underline"
          >
            Clear my list
          </button>
        </>
      )}
    </div>
  )
}

export default Request