import { useState } from "react"
import Button from 'react-bootstrap/Button'


const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(1)

    const Increment = () => {
        if(count < stock) setCount(prev => prev + 1);
    }

    const Decrement = () => {
        if(count > 1) setCount(prev => prev -1)
    }

    return (
        <>
            <div>
                <h2>{count}</h2>
                <Button variant="secondary" className="mx-2 border-dark" onClick={Increment}>+</Button>
                <Button variant="secondary" className="mx-2 border-dark" onClick={Decrement}>-</Button> 
            </div>
            <div>
                <Button  variant="secondary" className="my-2 border-dark" onClick={() => onAdd(count)}>Agregar al Carro</Button>
            </div>
        </>
        
    )
}

export default ItemCount