import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Pawn extends Component {

	static propTypes = {
	    color: PropTypes.string
	};

	render ()
	{

		const { color } = this.props;
    
		if (color === 'black')
			return <div className='square-content'> <span> &#9823; </span> </div>;
		else
			return <div className='square-content'> <span> &#9817; </span> </div>;
	}
}