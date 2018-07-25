import React from 'react';
import { render } from 'react-dom'; // reactDom renderiza componentes y elementos de react
import Media from './src/playlist/components/media'
const app = document.getElementById('app')

//const holaMundo = <h1>Hola mundo! </h1>;
// ReactDOM.render(que voy a renderizar, donde lo haré)
// al renderizar, react sabe que contiene < /> y por eso sabe que es un componente, por ejemplo ReactDOM.render(<Media />,app);
const title = "Vikings"
const text = "Las aventuras de Ragnar Lothbrok, un vikingo agricultor, mientras asciende para convertirse en el rey de los vikingos."
const image = "./images/covers/vikings.jpg"

render(<Media title={title} text={text} image={image} />,app);


