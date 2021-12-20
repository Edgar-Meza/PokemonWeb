import React from 'react';
import Nav from '../components/nav';

const About = () =>{
    return(
        <React.Fragment>
            <Nav
                classh="header-all"
                classd="d-flex"
            />
            <main className='about'>
                <div>
                    <h1>Sobre la página</h1>
                    <h2>desarrollador</h2>
                    <span>Edgar Meza</span>
                    <h2>Recursos utilizados</h2>
                    <a href="https://icons8.com">Iconos by Icons8</a>
                    <a href="https://pixabay.com/es/">Imagenes By Pixabay</a>
                    <a href='https://pokeapi.co/'>Datos obtenidos de Pokeapi.co</a>
                    <h2>Tecnológias utilizadas</h2>
                    <span>React js</span>
                    <span>Axios</span>
                    <span>CSS - Sass</span>
                    <span>React router</span>
                </div>
            </main>

        </React.Fragment>
    )
}

export default About