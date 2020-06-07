import React from 'react';

function Trader(props)
	{
	if(props.isUnlocked)
		{
		const buyClass = props.isBuyable ? "afford": "cantAfford"; 	
		const tradableItems = props.canTradeWith.map(resource=>{
			if(props.isBuyable)
				{
				return(
			
					<button
						name={props.name}
						key={resource.name}
						onClick={props.handleTrade}
						className={resource.name}
						value={resource}
					>
					trade: {props.tradeRatio.in} of {props.tradeRatio.name}for {props.tradeRatio.out} of {resource.name}
					</button>
				) 
			}
			else
				{
				return (<button key = {resource.name} name={props.name} className="cantAfford"> trade: {props.tradeRatio.in} of {props.tradeRatio.name} for {props.tradeRatio.out} of {resource.name}</button>)
			}
		});
		
		return(

		<div className="trader">
			<div className="buildingTitle"> {props.name}
				
				<div className="priceContainer">trade!!! </div> 
				
			</div>
			 <div className="buildingBuyContainer">
				{tradableItems}
			</div>
			<div className="count"> {props.count}
		</div>
		</div>

		)
	}
	else{
	 	return(
	 	<div>
	 		{props.isBuyable ?  `upgrade: Locked`: null}
	 	</div>
	 	)
	}

}
export default Trader;
