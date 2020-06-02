import React from 'react';

function Building(props)
	{
	if(props.isUnlocked)
		{
		const buyClass = props.isBuyable ? "afford": "cantAfford"; 	
		const PriceList = props.buyPrice.map(price=>
			{
			return(
				<div>
					{price.name}: {price.cost} 	
				</div>
			)
		})	

		return(

		<div className="building">
			<div className="buildingTitle"> BUY FOR:
				
				<div className={buyClass}>{PriceList}</div> 
				
			</div>
			 <div className="buildingBuyContainer">
				{props.isBuyable ? 
					<button name={props.name} onClick={props.handleBuildingBuy} className="buildingBuyBTN">{props.name}</button>
					:
					<button name={props.name} className="buildingNoBuyBTN">{props.name}</button>
				}
			</div>
			<div className="counter"> COUNT:{props.count}
		</div>
		</div>

		)
	}
	else{return null}
}


export default Building;
