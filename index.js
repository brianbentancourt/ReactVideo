import React from 'react';
import ReactDOM from 'react-dom'; // reactDom renderiza componentes y elementos de react

const app = document.getElementById('app')

const holaMundo = <h1>Hola mundo! </h1>;
// ReactDOM.render(que voy a renderizar, donde lo haré)
ReactDOM.render(holaMundo,app);

