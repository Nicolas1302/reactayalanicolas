import CardWitget from "../CartWitget/CartWitget"
import './navbar.css'

const NavBar = () => {
    return (
        <nav className="navbar">
            <h3 className="text" >Ecommerce</h3>
            <div className="button">
                <button className="boton1">Caños de Cobre</button>
                <button className="boton2">Mensulas</button>
                <button className="boton3">Cobertores</button>
            </div>
            < CardWitget/>
        </nav>
    )
}

export default NavBar