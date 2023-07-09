import { Link, useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({ id, img, name, category, price }) => {

    const navigate = useNavigate()

    return (
        <Card onClick={() => navigate(`/item/${id}`)} style={{ width: '15rem'}} className="mx-3 mb-3">
            <Card.Img variant="top" className="img-fluid align-self-center" src={img} style={{ width: 100, height:100}} />
            <Card.Body className="text-center">
                <Card.Title style={{ height:'60px'}}>{name}</Card.Title>
                <Card.Text>
                    cat: {category}
                </Card.Text>
                <Card.Text>
                    precio: ${price}
                </Card.Text>
                <Button variant="primary" ><Link to={`/item/${id}`} className="text-white text-decoration-none">ver detalle</Link></Button>
            </Card.Body>
        </Card>
    )
}

export default Item

