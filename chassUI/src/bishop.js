import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Bishop extends Component {

	static propTypes = {
	    color: PropTypes.string
	};

	render ()
	{

		const { color } = this.props;
    
		if (color === 'black')
			return <div className='square-content'> <span> &#9821; </span> </div>;
		else
			return <div className='square-content'> <span> &#9815; </span> </div>;
	}
}