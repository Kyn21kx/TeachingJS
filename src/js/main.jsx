import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'
import MouseSpotlight from './components/MouseSpotlight';
import SimpleCounter from './components/SimpleCounter';
import Login from './components/Login';
import CoffeeList from './components/CoffeeList';

// components

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CoffeeList/>
  </React.StrictMode>,
)
