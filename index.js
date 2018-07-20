import React from 'react';
import { render } from 'react-dom'; // reactDom renderiza componentes y elementos de react
import Media from './src/playlist/components/media'
const app = document.getElementById('app')

//const holaMundo = <h1>Hola mundo! </h1>;
// ReactDOM.render(que voy a renderizar, donde lo haré)
// al renderizar, react sabe que contiene < /> y por eso sabe que es un componente, por ejemplo ReactDOM.render(<Media />,app);
render(<Media />,app);

