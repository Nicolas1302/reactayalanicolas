import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const { itemId } = useParams()
    
    const [quantity,setQuantity] = useState(0)
    
    const handleOnAdd = (quantity) => {
        setQuantity(quantity)
    }

    useEffect(() => {
        document.title = product ? product.name : 'Mi Ecommerce' 

        return () => document.title = 'Mi Ecommerce'
    }, [product])

    useEffect(() => {

        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [itemId])


    return (
        <div className="text-center" >      
            <h1>Detalle del producto</h1>
            <h2>{product?.name}</h2>
            <img src={product?.img} alt="" style={{ width: '300px', height: '250px'}}/>
            {
                quantity == 0 
                ?(product?.stock > 0 ? <ItemCount stock={product?.stock} onAdd={handleOnAdd}/> : <p className="text-warning">No Hay Stock</p>)
                :<button className="btn btn-warning" >Finalizar-Compra</button>      
            }    
        </div>  
    )
}

export default ItemDetailContainer