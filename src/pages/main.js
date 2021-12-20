import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import Nav from '../components/nav';

const Main = (props) => {

    const [display, setDisplay] = useState(false);
    const [cls, setCls] = useState(false);
    const [search, setSearch] = useState(''); 
    
    const Change = (sta) => {
        setDisplay(sta);
        setCls(sta);
    }
    const handleSearch = (e) =>{
        e.preventDefault();
        setSearch(e.target.value);
    }

    return(
        <React.Fragment>
            <main>
                <div className='red-side'>
                    <h1>PokeWeb</h1>
                </div>
                <div className='line'>
                    <div className='circle-main'>
                        <div className='circle-secondary'>
                            <Nav
                                classh = 'header-main'
                                classd = {display?'d-flex':'d-none'}
                                sta = {()=>Change(false)}
                                close = {cls}
                            />
                            <img src='https://img.icons8.com/ios-filled/50/000000/menu--v5.png' alt='icon menu' onClick={()=>setDisplay(!display)}/>
                        </div>
                    </div>
                </div>
                <div className='white-side'>
                    <form>
                        <input type='text' name='search' id='search' placeholder='Buscar pokemon' onChange={handleSearch}/>
                        <div><Link to={'/information/?pokemon='+search}>buscar</Link></div>
                    </form>
                </div>
            </main>
            <Footer/>
        </React.Fragment>
    )
}

export default Main