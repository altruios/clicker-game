import React from 'react';

function Building(props)
	{
	if(props.isUnlocked)
		{
		const buyClass = props.isBuyable ? "afford": "cantAfford"; 	
		const PriceList = props.buyPrice.map(price=>
			{
			let costClass ="cantAfford";	
			if(price.cost <= props.currentPrices.find(x=>x.name===price.name).amount)
				{
				costClass = "afford";
			}	
			return(
				<div key={price.name} className={costClass}>
					{price.name}: <br />{price.cost} 	
				</div>
			)
		})	

		return(

		<div className="building">
			<div className="buildingTitle"> {props.name}
				
				<div className="priceContainer">BUY: {PriceList}</div> 
				
			</div>
			 <div className="buildingBuyContainer">
				{props.isBuyable ? 
					<button name={props.name} onClick={props.handleBuildingBuy} className="buildingBuyBTN">affordable</button>
					:
					<button name={props.name} className="buildingNoBuyBTN">can't afford</button>
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
