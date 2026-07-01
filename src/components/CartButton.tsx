import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function CartButton(){
    const { totalCount } = useCart()

    return (
        <Link
        to="/request"
        className ="fixed right-4 top-4 z-50 flex items-center gap-2 rounded-full bg-moss-600 px-4 py-2 text-sm font-semibold text-cream shadow-lg hover:bg-moss-800"
        >
            <span className="text-lg">🛒</span>
            <span>Request</span>
            {totalCount > 0 && (
                <span className="ml-1 flex h-6 min-w-6 item-center  justify-center rounded-full bg-gold-500 px-1.5 text-xs font-bold text-truffle-800">
                    {totalCount}
                </span>
            )}
        </Link>
    )
}

export default CartButton