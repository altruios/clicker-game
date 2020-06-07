import React from 'react';

function Clicker(props)	
	{
	const collectData = props.subjectData.map(data=>{
		return(
		`collect: ${data.amount} ${data.name}`
			)
		
		
	})
	return(
		<div>
		<button
			style={{backgroundColor:props.name}} 
			className="clickerBTN"
			name={props.name} 
			onClick={props.handleClicker}
			value={props.subjectData[0].amount} > 
				{collectData}
	
		</button>
		</div>


		)
}

export default Clicker;
