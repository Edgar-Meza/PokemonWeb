import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../components/nav";

class Information extends React.Component{

    state = {
        pokemon:[],
        imgPoke: '',
        abil: [],
        types: []
    }

    componentDidMount() {

        var search = new URLSearchParams(window.location.search);
        var param = search.get('pokemon');

        axios.get('https://pokeapi.co/api/v2/pokemon/'+param)
        .then(res=>(res.data))
        .then(data=>{
            var img = data.sprites.other.home.front_default;
            var abili = data.abilities;
            var typesp = data.types;
            this.setState({
                pokemon: data,
                imgPoke: img,
                abil: abili,
                types: typesp
            })
        })
    }

    render() {
        return (
            <React.Fragment>
                <Nav
                    classh = 'header-all'
                    classd = 'd-flex'
                />
                <main className="information">
                    <h1>{this.state.pokemon.name}</h1>
                    <div className="info">
                        <div className="img">
                            <img src={this.state.imgPoke} alt={this.state.pokemon.name}/>
                        </div>
                        <div className="stats">
                            <span>Caracteristicas</span>
                            <div className="features">
                                <div>
                                    <span>Tamaño</span>
                                    <span>{parseInt(this.state.pokemon.height)/10+' mts'}</span>
                                </div>
                                <div>
                                    <span>Peso</span>
                                    <span>{parseInt(this.state.pokemon.weight)/10+' kg'}</span>
                                </div>
                            </div>
                            <hr/>
                            <span>Tipos</span>
                            <div className="typesP">
                                {this.state.types.map(t=>(
                                    <span key={t.type.name}>{t.type.name}</span>
                                ))}
                            </div>
                            <hr/>
                            <span>Habilidades</span>
                            <div className="abilities">
                                {this.state.abil.map(h=>(
                                    <span key={h.ability.name}>{h.ability.name}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        )
    }
}

export default Information