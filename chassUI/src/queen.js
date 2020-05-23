import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Queen extends Component {

	static propTypes = {
	    color: PropTypes.string
	};

	render ()
	{

		const { color } = this.props;
    
		if (color === 'black')
			return <div className='square-content'> <span> &#9819; </span> </div>;
		else
			return <div className='square-content'> <span> &#9813; </span> </div>;
	}
}