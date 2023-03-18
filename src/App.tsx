import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Catalog } from './pages/Catalog';
import { Detail } from './pages/Detail';
import { Home } from './pages/Home';

import './App.scss';
import 'swiper/swiper.min.css';

export const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route
        path="/:category/search/:keyword"
        element={<Catalog />}
      />
      <Route
        path="/:category/:id"
        element={<Detail />}
      />
      <Route
        path="/:category"
        element={<Catalog />}
      />
      <Route
        path="/"
        element={<Home />}
      />
    </Routes>
    <Footer />
  </BrowserRouter>
);
