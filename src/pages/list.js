import React, { useEffect, useState } from 'react';
import Nav from '../components/nav';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const List = (props) => {

    let {search} = useLocation();
    let params = new URLSearchParams(search);
    let type = params.get('type');

    const [pokemons, setPokemons] = useState([]);
    const [pokemon, setPokemon] = useState([]);


    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/type/'+type)
        .then(res=>{
            var pokes = res.data.pokemon;
            setPokemons(pokes);
        });
        const pokems = pokemons.map(o=>{
                var x=[];
                axios.get(o.pokemon.url)
                .then(res=>{
                    x=x+res.data;
                })
                return x;
            });
        
        
    })

    return(
        <React.Fragment>
            <Nav
                classh = "header-all"
                classd = "d-flex"
            />
            <main>
                <h1>lista</h1>{type}
            </main>
        </React.Fragment>
    )
}

export default List