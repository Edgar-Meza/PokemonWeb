import React, { useEffect, useState } from "react";
import Logo from "../images/logo.png";
import { BrowserRouter, Link } from "react-router-dom";
import Footer from "./footer";

const Nav = (props) =>{

    const [close, setClose] = useState(props.close);

    useEffect(()=> {
        if(!props.close) {
            setClose(false);
        }
    })

    return(
        <header className={close?'d-none '+props.classh:props.classd + ' ' +props.classh}>
            <div className="branding-page">
                <Link to="/">
                    <img src={Logo} alt="Logo pokebola"/>
                </Link>
            </div>
            <nav>
                <ul>
                    {/* <li><Link to="/">Inicio</Link></li> */}
                    <li><Link to="/categories">Categorias</Link></li>
                    {/* <li><Link to="/information">Informacion</Link></li> */}
                </ul>
            </nav>
            <div className="author-page">
                <span>Desarrollada por Edgar Meza</span>
                <div>
                    <a href="https://icons8.com">Iconos by Icons8</a>
                    <a href="https://pixabay.com/es/">Imagenes By Pixabay</a>
                </div>
                <img src="https://img.icons8.com/material-outlined/24/000000/delete-sign.png" onClick={()=>{setClose(!close);props.sta(false)}}/>
            </div>
        </header>
    )
}

export default Nav