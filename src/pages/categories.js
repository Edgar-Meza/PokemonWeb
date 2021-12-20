import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Nav from "../components/nav";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/footer";

const Categories = () =>{

    const [cat, setCat] = useState([]);

    useEffect(()=> {
        var isMounted = true;
        axios.get('https://pokeapi.co/api/v2/type')
        .then(res=>{
            const dat = res.data;
            setCat(dat.results);
        })
        return () => {
            isMounted = false;
        }
    })

    return(
        <React.Fragment>
            <Nav
                classh = 'header-all'
                classd = 'd-flex'
            />
            <main className="categories">
                <h1>Selecciona la categoria que quieras explorar</h1>
                <div className="types">
                    {cat.map(el=>(
                        <div className="type" key={el.name}>
                            <Link to={"/list/?type="+el.name}>
                                <h2>{el.name}</h2>
                                <img src={"./images/"+el.name+'.png'}/>
                            </Link>
                        </div>
                    ))}
                </div>
            </main>
        </React.Fragment>
    )
}

export default Categories