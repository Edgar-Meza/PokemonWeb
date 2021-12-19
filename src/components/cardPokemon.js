import React from "react";
import { Link } from "react-router-dom";

const CardPokemon = (props) =>{
    return(
        <div>
            <Link to={'/information/?pokemon='+props.name}>
                <span>{props.name}</span>
                <img src={props.img} alt={props.name}/>
            </Link>
        </div>
    )
}

export default CardPokemon