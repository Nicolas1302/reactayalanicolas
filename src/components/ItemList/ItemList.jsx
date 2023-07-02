import Item from "../Item/Item"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemList = ({products}) => {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="10">
                    <div style={{ display: 'flex'}}>
                        {
                            products.map(prod => {
                                return (
                                    <Item  key={prod.id} {...prod} />
                                )
                            })
                        }
                    </div>
                </Col>
            </Row>
        </Container>
        
    )
}

export default ItemList