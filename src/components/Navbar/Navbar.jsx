import './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'

import { Link, NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


export const Nav = () => {
    return (
        <Navbar  className="bg-dark text-white justify-content-around">
            <NavLink className='text-decoration-none'  to={'/'}>
                <h1>Ecommerce</h1>
            </NavLink>
            <div>
                <Button className="mx-2">
                    <NavLink to={'/'}  className="text-white text-decoration-none">Inicio</NavLink>
                </Button> 
                <Button className="mx-2">
                    <NavLink to={'/category/caños'}className="text-white text-decoration-none" >Caños</NavLink>
                </Button> 
                <Button className="mx-2">
                    <NavLink to={'/category/mensulas'} className="text-white text-decoration-none">Mensulas</NavLink>
                </Button>
                <Button className="mx-2">
                    <NavLink to={'/category/capacitores'} className="text-white text-decoration-none">Capacitores</NavLink>
                </Button>
            </div>
            <Button variant="warning">
                <NavLink to={'/cart'} className="text-white text-decoration-none"><CartWidget/></NavLink>                
            </Button>
            
        </Navbar>
    )
}

export default Nav
