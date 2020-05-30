import React from 'react';
function Resource(props)	
	{
	return(
		<div>
		{props.name} and  {props.amount || 0}

		</div>


		)
}

export default Resource;
