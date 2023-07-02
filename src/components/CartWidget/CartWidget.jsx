import cart from './assets/cart.svg'
import { useCart } from '../../CartContext/CartContext'

const CartWidget = () => {
    const { totalQuantity } = useCart()

    return ( 
        <div>
            <img src={cart}/>
            {totalQuantity}
        </div>
    )
}

export default CartWidget