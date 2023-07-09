import './Cart.css'
import { Link } from "react-router-dom"
import { useCart } from "../../CartContext/CartContext"

const  Cart = () => {
    const { cart, total } = useCart()

    return (
        <>
            <h1 className="text-center fs-2">Carrito</h1>
            {
                cart.map(prod => {
                    return (
                        <div key={prod.id} className="flex-container">
                            <h1 className='flex-item'>{prod.name}</h1>
                            <h3 className='flex-item'>${prod.price}</h3>
                            <h3 className='flex-item'>cantidad: {prod.quantity}</h3>
                            <h3 className='flex-item'>subtotal: {prod.quantity * prod.price}</h3>
                        </div>
                    )
                })
            }
            <div className='flex-container total'>
                <h1 className='flex-item'>Total de la compra:</h1>
                <h1 className='flex-item'>${total}</h1>
            </div>
            
            <div className="d-grid col-6 mx-auto text-center">
                <Link to='/checkout' className="btn btn-primary border border-dark border-3 rounded-pill" type="button">
                    CHECKOUT
                </Link>
            </div>

            
        </>

    )
}

export default Cart