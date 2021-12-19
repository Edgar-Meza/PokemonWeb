import React, { useEffect, useState } from "react";
import Logo from "../images/logo.png";
import { BrowserRouter, Link } from "react-router-dom";

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
                <img src={Logo} alt="Logo pokebola"/>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/categories">Categorias</Link></li>
                    <li><Link to="/information">Informacion</Link></li>
                </ul>
            </nav>
            <div className="author-page">
                <span>Git</span>
                <img src="https://img.icons8.com/material-outlined/24/000000/delete-sign.png" onClick={()=>{setClose(!close);props.sta(false)}}/>
            </div>
        </header>
    )
}

export default Nav