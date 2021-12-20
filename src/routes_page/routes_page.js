import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from '../pages/about';
import Categories from '../pages/categories';
import Information from '../pages/information';
import List from '../pages/list';
import Main from '../pages/main';

const RoutesPage = () =>(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/categories" element={<Categories/>}/>
            <Route path="/information" element={<Information/>}/>
            <Route path="/list" element={<List/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    </BrowserRouter>
)

export default RoutesPage