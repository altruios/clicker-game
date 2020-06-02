import React from 'react';
function Resource(props)	
	{
	if(props.isUnlocked)
		{	
		return(
			<div className="resource">
			<br/>
			<div style={{backgroundColor:props.name, color:"#ffffff"}}>
			{props.name}  {props.amount>0? props.amount : "0"} MAX: {props.max}<br />
			rate of increase: {props.changePerTick}
	<br /><br />
			</div>
			</div>
		)
	}
	else{
		return null;
	}
}

export default Resource;
