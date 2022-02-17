import './Header.css';
import {Switch, Route, Link} from 'react-router-dom'
const Header = (props) =>{
    return(
        <header className="header">
            <h1 className="header-title">Bradigson Nuñez</h1>
            <nav className="header-navbar">
                <Link to="" className="header-link home">Home</Link>
                <Link to="" className="header-link">Feature</Link>
                <Link to="" className="header-link">Client</Link>
                <Link to="" className="header-link">Price</Link>
                <Link to="" className="header-link">Contact</Link>
            </nav>
        </header>

    )
}


export default Header;