/*const { createElement } = React;*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
//import { observe } from './Observe';
import { init_observe } from './Game';




const { render } = ReactDOM
const style = {

	backgroundColor: 'orange',
	color: 'white',
	fontFamily:'verdana'
}

const rootEl = document.getElementById('react-container');

init_observe(knightPosition =>
  
  ReactDOM.render(
  	/*asdasdsadasdasd*/
    <Board piecePosition={knightPosition} />,
    rootEl
  )
);

/*

funct observ
(
	funct (knightPosition)
	{
		ReactDOM.render(
		    <Board piecePosition={knightPosition} />,
		    rootEl
		  )
	}

) 
{
	function observe(receive) {
		  setInterval( () => receive([ String.fromCharCode(64 + Math.floor(Math.random() * 8)+1), Math.floor(Math.random() * 8) ]), 800);	

}

*/

/*
render (
	<div className='row'>
		<Board piecePosition={[0, 0]} />

	</div>
	,
	document.getElementById('react-container')
	)
*/

/*render(
	//<h1 id='title'
		//className='header'
		//style={style}>
		//Hello World!
	//</h1>
	<Board knightPosition={[0, 0]} />

		
	,
	document.getElementById('react-container')
)*/