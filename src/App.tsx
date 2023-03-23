import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Routing } from './routes/Routes';

import './App.scss';

export const App = () => (
    <BrowserRouter>
        <Header/>
        <Routing/>
        <Footer/>
    </BrowserRouter>
);
