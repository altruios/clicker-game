import React from 'react';
function Resource(props)	
	{
	return(
		<div>
		<br/>
		{props.name}  {props.amount>0? props.amount : "0"} MAX: {props.max}<br />
		rate of increase: {props.changePerTick}
<br /><br />
		</div>


		)
}

export default Resource;
