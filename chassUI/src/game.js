import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';


export function init_observe(receive) {
  
  //setInterval(() => receive([String.fromCharCode(64 + Math.floor(Math.random() * 8)+1), 
  //(Math.floor(Math.random() * 7.5 ) ) + 1 ]), 800);

	let x = String.fromCharCode(64 + Math.floor(Math.random() * 8)+1);
	let y = (Math.floor(Math.random() * 7.5 ) ) + 1;

	window.actualposition = x + y;

	receive([ x , y ]);

}


export function moveKnight(xy) {

	console.log('click:'+xy);

	if (window.actualposition != undefined)
	{
		var movement = validateMove(window.actualposition, xy);	
		console.log('movement:'+movement);
	}
	
	//receive([ xy[0] , xy[1] ]);
	if(movement){
		window.actualposition = xy;
	    console.log('xy:'+xy);

	    var a  = xy.split('');
		test([ a[0] , a[1] ]);
	}
}

export function observe(receive,xy) {

	console.log('click:'+xy);

	if (window.actualposition != undefined)
	{
		var movement = validateMove(window.actualposition, xy);	
		console.log('movement:'+movement);
	}
	
	//receive([ xy[0] , xy[1] ]);
	if(movement){
		window.actualposition = xy;
	    console.log('xy:'+xy);

	    var a  = xy.split('');
		receive([ a[0] , a[1] ]);
	}
}

function validateMove(currentPiecePos, newPos)
{
	let curCol = currentPiecePos[0];
	let curRow = currentPiecePos[1];

	let curRowUp = parseInt(curRow) + 2;
	let curRowDown = parseInt(curRow) - 2;
	let curRowLessUp = parseInt(curRow) + 1;
	let curRowLessDown = parseInt(curRow) - 1;

	let curColFarRight =  String.fromCharCode(toUnicode(curCol) + 2 );
	let curColFarLeft =  String.fromCharCode(toUnicode(curCol) - 2 );
	let curColRight =  String.fromCharCode(toUnicode(curCol) + 1 );
	let curColLeft =  String.fromCharCode(toUnicode(curCol) - 1 );
	
	console.log('4 pospos;'+curColRight + curRowUp);
	console.log('5;pospos'+curColLeft + curRowUp);

	console.log('4 pospos;'+curColFarRight + curRowLessUp);
	console.log('5;pospos'+curColFarLeft + curRowLessUp);
	
	console.log('6;currentPiecePos'+currentPiecePos);

	switch (newPos)
	{
		case (curColLeft + curRowUp):
			console.log('aqui:'+curColRight + curRowUp);
			return true;
			break;
		case (curColRight + curRowUp):
			console.log('aqui:'+curColRight + curRowUp);
			return true;
			break;
		case (curColFarRight + curRowLessUp ):
			console.log('aqui:'+curColRight + curRowLessUp);
			return true;
			break;
		case (curColFarLeft + curRowLessUp ):
			console.log('aqui:'+curColRight + curRowLessUp);
			return true;
			break;
		default:
			return false;
    		break;
    	case (curColLeft + curRowDown):
			console.log('aqui:'+curColRight + curRowUp);
			return true;
			break;
		case (curColRight + curRowDown  ):
			console.log('aqui:'+curColRight + curRowUp);
			return true;
			break;
		case (curColFarRight + curRowLessDown ):
			console.log('aqui:'+curColRight + curRowLessUp);
			return true;
			break;
		case (curColFarLeft + curRowLessDown ):
			console.log('aqui:'+curColRight + curRowLessUp);
			return true;
			break;

	}
	

	//console.log(curRow + curCol + ';');
}




const knightSource = {
  beginDrag(props) {
    return {};
  }
};

function toUnicode(theString) {
  var unicodeString = '';
  for (var i=0; i < theString.length; i++) {
    var theUnicode = theString.charCodeAt(i);
    //while (theUnicode.length < 4) {
      //theUnicode = '0' + theUnicode;
    //}
    theUnicode = theUnicode;
    unicodeString += theUnicode;
  }
  return parseInt(unicodeString);
}



export function observe2(coordenated) {
  
  //setInterval(() => receive([String.fromCharCode(64 + Math.floor(Math.random() * 8)+1), 
	//(Math.floor(Math.random() * 7.5 ) ) + 1 ]), 800);
	var a = coordenated[0];
	var b = coordenated[1];
	coordenated([a,b]);

}

export function test(x) {
  
	
	const rootEl = document.getElementById('react-container');

	observe((piecePosition) =>
	  
	  ReactDOM.render(
	    <Board piecePosition={piecePosition} />,
	    rootEl
	  )
	,x);

}
