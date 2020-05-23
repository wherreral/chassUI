import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Square from './Square';
import BoardSquare from './BoardSquare';
import Knight from './Knight';
import Rook from './Rook';
import Bishop from './Bishop';
import Queen from './Queen';
import King from './King';
import Pawn from './Pawn';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

@DragDropContext(HTML5Backend)
export default class Board extends Component {
  
  static propTypes = {
    piecePosition: PropTypes.arrayOf(PropTypes.string,PropTypes.number).isRequired,

  };

  render() {

    const [knightX, knightY] = this.props.piecePosition;  
    const col = ['A','B','C','D','E','F','G','H'];
    const squares = [];
    const knight = [];

    knight.push( <Knight black/> );

    let color = true;
    let piece , piece2;
    let pieces = [{
                    key:"A1",
                    piece: "rook"
                  },
                  {   
                    key:"A2",
                    piece: "knight"
                  },
                  {   
                    key:"A3",
                    piece: "bishop"
                  }
    ];


    let myMap = new Map([
     /* [ "A1", <Rook color='white'/> ],
      [ "B1", <Knight color='white'/> ],
      [ "C1", <Bishop color='white'/> ],
      [ "D1", <Queen color='white'/> ],
      [ "E1", <King color='white'/> ],
      [ "F1", <Bishop color='white'/> ],
      [ "G1", <Knight color='white'/> ],
      [ "H1", <Rook color='white'/> ],
      [ "A2", <Pawn color='white'/> ],
      [ "B2", <Pawn color='white'/> ],
      [ "C2", <Pawn color='white'/> ],
      [ "D2", <Pawn color='white'/> ],
      [ "E2", <Pawn color='white'/> ],
      [ "F2", <Pawn color='white'/> ],
      [ "G2", <Pawn color='white'/> ],
      [ "H2", <Pawn color='white'/> ],

      [ "A8", <Rook color='black'/> ],
      [ "B8", <Knight color='black'/> ],
      [ "C8", <Bishop color='black'/> ],
      [ "D8", <Queen color='black'/> ],
      [ "E8", <King color='black'/> ],
      [ "F8", <Bishop color='black'/> ],
      [ "G8", <Knight color='black'/> ],
      [ "H8", <Rook color='black'/> ],
      [ "A7", <Pawn color='black'/> ],
      [ "B7", <Pawn color='black'/> ],
      [ "C7", <Pawn color='black'/> ],
      [ "D7", <Pawn color='black'/> ],
      [ "E7", <Pawn color='black'/> ],
      [ "F7", <Pawn color='black'/> ],
      [ "G7", <Pawn color='black'/> ],
      [ "H7", <Pawn color='black'/> ]*/

    ]);

    myMap.set(knightX+knightY,<Knight />);
        


    //Fill array with all the squares that in the end form the board
    for (let i = 8; i >= 1; i--) {
      {color = !color}      
      for (let j = 1; j <= 8; j++) 
      {


          if(myMap.has(col[j-1]+i))
          {
                piece = "tiene";
          }
        else
                piece = "";
        
        squares.push(
          <BoardSquare color={color} coord={col[j-1]+i} >
             {myMap.get(col[j-1]+i)}
          </BoardSquare>
          )
          
          color = !color
    
    }
  }


    return (
      <div className='board-parent' key='esf'>
        {/**/}
        {squares}
      {/*squares[1].props.coord +squares[1].props.color*/}
      {/*myMap.forEach( (val, key) => console.log(key, val) )*/}
      {/*myMap.get("A1")*/}
      </div>
    );
  }
}