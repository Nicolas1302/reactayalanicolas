import { Link, useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({ id, img, name, category, price }) => {

    const navigate = useNavigate()

    return (
        <Card onClick={() => navigate(`/item/${id}`)} style={{ width: '18rem'}}>
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

/* <div onClick={() => navigate(`/item/${id}`)} style={{ margin: 20, border: '1px solid #000', display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
            <img src={img} alt={name} style={{ width: 100}}/>
            <h3></h3>
            <p>cat: {category}</p>
            <h3>precio: ${price}</h3>
            <Link to={`/item/${id}`}>ver detalle</Link>
        </div> */