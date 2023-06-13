import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemListOtro from "../ItemList/ItemList"

import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        document.title = categoryId ? `Categoria: ${categoryId}` : 'Todos los productos'

        return () => document.title = 'Mi Ecommerce'
    }, [categoryId])

    useEffect(() => {

        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(response => {
                setProducts(response)
            }) 
    

    }, [categoryId])

    return (
        <div>
            <h1 className="text-center">{greeting}</h1>
            <ItemListOtro products={products}/>
        </div>
    )
}

export default ItemListContainer