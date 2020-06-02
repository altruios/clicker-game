import React from 'react';

function Clicker(props)	
	{
	
	return(
		<div>
		<button
			style={{backgroundColor:props.name}} 
			className="clickerBTN"
			name={props.name} 
			onClick={props.handleClicker}
			value={props.value} > 
				COLLECT {props.value}: {props.name} 
	
		</button>
		</div>


		)
}

export default Clicker;
