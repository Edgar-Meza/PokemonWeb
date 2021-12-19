import React, { useEffect, useState } from 'react';
import Nav from '../components/nav';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import CardPokemon from '../components/cardPokemon';

class List extends React.Component {

    state = {
        pokemons: []
    }

    componentDidMount() {
        var search = new URLSearchParams(window.location.search);
        var param = search.get('type');

        axios.get('https://pokeapi.co/api/v2/type/'+param)
        .then(res=>{
            var pokes = res.data.pokemon;
            pokes.map(o=>{
                axios.get(o.pokemon.url)
                .then(res=>res.data)
                .then(data=>{
                    this.setState({
                        pokemons:[
                            ...this.state.pokemons,
                            {data}
                        ]
                    })
                })
            })
        });
    }
    componentWillUnmount() {
        this.setState({});
    }

    render(){
        return(
            <React.Fragment>
                <Nav
                    classh = "header-all"
                    classd = "d-flex"
                />
                <main className=''>
                    <h1>lista</h1>
                    <div className='pokeList'>
                        {this.state.pokemons.map(poke =>(
                            <CardPokemon
                                key = {poke.data.name}
                                name = {poke.data.name}
                                img = {poke.data.sprites.other.home.front_default}
                            />
                        ))}
                    </div>
                </main>
            </React.Fragment>
        )
    }
}

export default List