import React from "react";
import './Header.css';
import Logo from '../img/logo.jpg';

class Header extends React.Component{
    render(){
        return(
            <div class="bg-dark text-center text-white p-3">
                <img src={Logo} alt="Logo IESN1" width="100px"/>
                <h3>
                    Bienvenido a la pagina de incidencias.
                </h3>
            </div>
        )
    }
}
export default Header;