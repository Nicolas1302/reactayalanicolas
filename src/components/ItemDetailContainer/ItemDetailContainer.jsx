import '../../App.css'
import { useState, useEffect } from 'react' 
// import { getProductById } from "../../asyncMock"
import ItemDetail from '../ItemDetail/ItemDetail'

import { getDoc, doc } from 'firebase/firestore'

import { db } from '../../services/firebase/firebaseConfig'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        const productRef = doc(db, 'products', itemId)

        getDoc(productRef)
            .then(querySnapshot => {
                const fields = querySnapshot.data()
                const productAdapted = { id: querySnapshot.id, ...fields }

                setProduct(productAdapted)
            })
    }, [itemId])

    return (
        <div>
            <h1 className='text-center fs-3 mt-2'>Detalle de producto</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer


