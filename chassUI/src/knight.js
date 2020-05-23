import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ItemTypes } from './Constants';
import { DragSource } from 'react-dnd';


const knightSource = {
  beginDrag(props, monitor, component) {
    
  	console.log('moving');
    
    	const item = { id: props.id };
    	return item;
    
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

@DragSource(ItemTypes.KNIGHT, knightSource, collect)
export default class Knight extends Component {
	
	static propTypes = {
	    connectDragSource: PropTypes.func.isRequired,
	    isDragging: PropTypes.bool.isRequired
	  };

	 

	render ()
	{

		const { color } = this.props;
		const { connectDragSource, isDragging } = this.props;
    
		if (color === 'black'){
			return connectDragSource(<div className='square-content'
						style={{
					        opacity: isDragging ? 0.5 : 1,
					        fontSize: 25,
					        fontWeight: 'bold',
					        cursor: 'move'
					      }}> 
					<span> &#9822; </span> </div>
					);
		}
		else{
			return connectDragSource(<div className='square-content'
						style={{
					        opacity: isDragging ? 0.5 : 1,
					        fontWeight: 'bold',
					        cursor: 'move'
					      }}> 
					 &#9816; </div>
					);
		}

		
	}
}