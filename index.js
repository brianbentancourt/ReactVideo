import React from 'react';
import { render } from 'react-dom'; // reactDom renderiza componentes y elementos de react
import Categories from './src/playlist/components/categories'
import data from './src/api.json'
const app = document.getElementById('app')

//const holaMundo = <h1>Hola mundo! </h1>;
// ReactDOM.render(que voy a renderizar, donde lo haré)
// al renderizar, react sabe que contiene < /> y por eso sabe que es un componente, por ejemplo ReactDOM.render(<Media />,app);
const title = "Vikings"
const text = "Las aventuras de Ragnar Lothbrok, un vikingo agricultor, mientras asciende para convertirse en el rey de los vikingos."
const image = "./images/covers/vikings.jpg"

render(<Categories data={data} />,app);


