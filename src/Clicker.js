import React from 'react';

function Clicker(props)	
	{
	
	return(
		<div>
		{props.name}
		<button 
			name={props.name} 
			onClick={props.handleClicker}
			value={props.value} > 
				{props.name} {props.value}
	
		</button>
		</div>


		)
}

export default Clicker;
