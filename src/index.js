//importation de React et ReactDom
import React from 'react'
import ReactDOM from 'react-dom/client'
// Import du composant Router qui gère la navigation de l'application
import Router from './utils/Router'

//Selection de 'root' dans notre index.html qui recevra l'intégralité du rendu de notre composant Router
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Router />)
