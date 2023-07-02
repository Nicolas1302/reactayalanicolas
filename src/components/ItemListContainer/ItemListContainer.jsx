import { useState, useEffect } from "react"
// import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemListOtro from "../ItemList/ItemList"

import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from "firebase/firestore"
import {db} from '../../services/firebase/firebaseConfig'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const productsRef = !categoryId 
            ? collection(db, 'products')
            : query(collection(db, 'products'), where('category', '==', categoryId))

        getDocs(productsRef)
            .then(querySnapshot =>{
                const productsAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data()
                    return { id: doc.id, ...fields }

                })
                console.log(productsAdapted)
                setProducts(productsAdapted)
            })
            // .finality (() => (
            //     setLoading(false)
            // ))

    }, [categoryId])

    // useEffect(() => {

    //     const asyncFunction = categoryId ? getProductsByCategory : getProducts

    //     asyncFunction(categoryId)
    //         .then(response => {
    //             setProducts(response)
    //         }) 
    

    // }, [categoryId])

    return (
        <div>
            <h1 className="text-center">{greeting}</h1>
            <ItemListOtro products={products}/>
        </div>
    )
}

export default ItemListContainer