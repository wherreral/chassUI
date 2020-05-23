import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class King extends Component {

	static propTypes = {
	    color: PropTypes.string
	};

	render ()
	{

		const { color } = this.props;
    
		if (color === 'black')
			return <div className='square-content'> <span> &#9818; </span> </div>;
		else
			return <div className='square-content'> <span> &#9812; </span> </div>;
	}
}