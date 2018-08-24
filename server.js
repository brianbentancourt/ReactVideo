/*
import express from 'express';
import Home from './dist/ssr/home';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import data from './src/api.json';
import Base from './src/pages/components/base';
*/
let express = require('express');
//let Home = require('./dist/ssr/home');
//let React = require('react');
//let { renderToStaticMarkup } = require('react-dom/server');
let data = require('./src/api.json');
//let Base = require('./src/pages/components/base');

const app = express();

//app.use(express.static('dist'))
//app.use('/images', express.static('images'))

var port = process.env.PORT || 9000;

app.get('/dist/css/home', (req, res) => {
  res.sendFile('./dist/css/home.css', {root: __dirname });
})

app.get('/dist/js/home', (req, res) => {
  res.sendFile('./dist/js/home.js', {root: __dirname });
})

app.get('/images/logo.png', (req, res) => {
  res.sendFile('./images/logo.png', {root: __dirname });
})

app.get('/', (req, res) => {
  // fetch('dame datos').then((datos)=>{

  // })
  res.sendFile('./index.html', {root: __dirname });

  // res.write(renderToStaticMarkup(
  //   <Base
  //     title="Platzi Video"
  //     css="css/home.css"
  //     js="js/home.js"
  //   >
  //     <Home data={data} />
  //   </Base>
  // ));
  // res.end();
})


app.listen(port, () => {
    console.log('Corriendo servidor en puerto', port);
});
