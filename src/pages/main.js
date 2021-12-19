import React, { useEffect, useState } from 'react';
import Nav from '../components/nav';

const Main = () => {

    const [display, setDisplay] = useState(false);
    const [cls, setCls] = useState(false);
    
    const Change = (sta) => {
        setDisplay(sta);
        setCls(sta);
    }

    return(
        <React.Fragment>
            <main>
                <div className='red-side'>
                    <h1>Pokedex</h1>
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
                        <input type='text' name='search' id='search' placeholder='Search pokemon' />
                    </form>
                    <a href="https://icons8.com/icon/NvAez9zuZg1W/menú">Menú icon by Icons8</a>
                </div>
            </main>
        </React.Fragment>
    )
}

export default Main