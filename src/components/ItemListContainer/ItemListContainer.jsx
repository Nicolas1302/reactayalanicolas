
import ItemListOtro from "../ItemList/ItemList"

import { useParams } from "react-router-dom"

import { useAsync } from '../../hooks/useAsync'

import { getProducts } from '../../services/firebase/firestore/products'



const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams()

    const getProductsWithCategory = () => getProducts(categoryId)


    const { data: products, error, loading } = useAsync(getProductsWithCategory, [categoryId])
    
    if(loading) {
        return <h1>Loading...</h1>
    }

    if(error) {
        return <h1>Hubo un error al obtener los productos</h1>
    }
    


    return (
        <div>
            <h1 className="text-center my-5">{greeting}</h1>
            <div className="container text-center">
                <div className="row row-gap-4 justify-content-center">
                    <ItemListOtro products={products}/>  
                </div>    
            </div>
            
        </div>
    )
}

export default ItemListContainer