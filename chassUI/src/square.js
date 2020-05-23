import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observe, test} from './Game';

export default class Square extends Component {
  render() {
    const { color, coord, pieceColor } = this.props;
    
    const fill = color ? 'green' : 'white';
    const stroke = color ? 'white' : 'green';
    let key = coord;

    return ( 
    	<div className='square-box ' style={{ 
	    	backgroundColor: fill,
	    	key: key
	        }} 
	        onClick={() => this.handleSquareClick(coord)}>
	        {this.props.children}
	    </div>
        )
  }



	 handleSquareClick(toX) {
	 	//moveKnight(toX);
	 	//console.log(toX);
	 	test(toX);
	 


	}
}



Square.propTypes = {
  color: PropTypes.bool,
  coord: PropTypes.string,
  pieceColor: PropTypes.string
};


