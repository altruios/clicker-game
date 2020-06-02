import React from 'react';

function Building(props)
	{
	if(props.isUnlocked)
		{
		const PriceList = props.buyPrice.map(price=>
			{
			return(
				<div>
					{price.name}: {price.cost}	
				</div>
		)
				})	

		return(

		<div>
			<div> BUY FOR:{PriceList} </div>
		{props.isBuyable ? <button name={props.name} onClick={props.handleBuildingBuy}>
		{props.name}
		
		</button>:<div>{props.name}</div>}
			<div> COUNT:{props.count}
		</div>
		</div>

		)
	}
	else{return null}
}


export default Building;
