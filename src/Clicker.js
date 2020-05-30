import React from 'react';

function Clicker(props)	
	{
	return(
		<div>
		{props.name}
		<button 
			name={props.name} 
			onClick={props.HandleClick} 
			data-target={props.subjectsOfIncrease}> 
				{props.name} {props.value}
	
		</button>
		</div>


		)
}

export default Clicker;
