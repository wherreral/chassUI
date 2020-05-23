import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Square from './Square';

import { moveKnight } from './Game';
import { ItemTypes } from './Constants';
import { DropTarget } from 'react-dnd';



 const squareTarget = {
	  drop(props) {
	    moveKnight(props.coord);
	  }
  };


function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

@DropTarget(ItemTypes.KNIGHT, squareTarget, collect)
export default class BoardSquare extends Component {
  
  static propTypes = {
    coord: PropTypes.string,
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    color: PropTypes.bool
  };



render() {
    //const { x, y } = this.props;
    
    const { color, coord, connectDropTarget, isOver } = this.props;
    const fill = color ? 'green' : 'white';
    const stroke = color ? 'white' : 'green';
    let key = coord;

    return (
		 	connectDropTarget(

		 	<div style={{
		        position: 'relative',
		        width: '100%',
		        height: '100%'
		      }}>
		 		
		      <Square color={color} coord={coord}>
		        {this.props.children}
		      </Square>
		      {isOver &&
		          <div style={{
		            position: 'absolute',
		            top: 0,
		            left: 0,
		            height: '100%',
		            width: '100%',
		            zIndex: 1,
		            opacity: 0.5,
		            backgroundColor: 'yellow',
		          }} />
		       }

		    </div>
		)
    );
  }


}