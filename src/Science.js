import React from 'react';

function Science(props)
	{
	if(props.isUnlocked && ! props.isBought)
		{
		
		const buyClass = props.isBuyable ? "afford": "cantAfford"; 	
		
		const PriceList = props.buyPrice.map(price=>
			{
			const costClass = (price.cost <= props.currentPrices.find(x=>x.name===price.name).amount) ? "afford":"cantAfford";
				
			return(
				<div key={price.name} className={costClass}>
					{price.name}: <br />{price.cost} 	
				</div>
			)
		})	

		return(

		<div className="science">
			<div className="buildingTitle"> {props.name}
				
				<div className="priceContainer">BUY: {PriceList}</div> 
				
			</div>
			 <div className="buildingBuyContainer">
				{props.isBuyable ? 
					<button name={props.name} onClick={props.handleBuyScience} className="buildingBuyBTN">affordable</button>
					:
					<button name={props.name} className="buildingNoBuyBTN">can't afford</button>
				}
			</div>
			<div className="hasBeenBought"> {props.description}
		</div>
		</div>

		)
	}
	else{return <div>science {props.isBought? "aready Bought":"locked"} :{props.name}</div>}
}


export default Science;
