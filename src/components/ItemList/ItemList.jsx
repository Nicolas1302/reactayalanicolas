import Item from "../Item/Item"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const ItemList = ({products}) => {
    return (        
        <>                   
            {
                products.map(prod => {
                    return (                         
                        <Item key={prod.id} {...prod} />      
                    )
                })
            }
        </> 
    )
}

export default ItemList