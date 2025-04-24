import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/Layout.css'
import './styles/Product.css'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/shares/Layout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // configuration de la route avec react roter dom  BrowserRouter & Routes & et Route 
  <BrowserRouter>
    <Routes>
      {/* chemin d acces a la page d accueil  */}
      <Route path="/" element={<Layout />} ></Route>
    </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
