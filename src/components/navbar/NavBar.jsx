import React from "react";
import logo from '../images/logo.png';
import 'bootstrap/dist/css/bootstrap.css';


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-4">
            <a className="navbar-brand" href='/'>
                <img src={logo} alt="logo" height='100' />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse p-4" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">INICIO</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">NOSOTROS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">OFERTAS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">GIF CARDS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">SUCURSALES</a>
                    </li>
                </ul>
            </div>

            <a className="navbar-brand" href="#">A Jugar</a>
        </nav>
    );
}

export default NavBar;