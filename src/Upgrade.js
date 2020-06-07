import React from 'react';

function Upgrade(props)
	{
	if(props.isUnlocked)
		{
		const buyClass = props.isBuyable ? "afford": "cantAfford"; 	
		const subjectsOfUpgrade = props.subjectData.map(data=>{
			return(
				`${data.name} by ${data.amount}`


				)
		})
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
					<button name={props.name} onClick={props.handleUpgrade} className="buildingBuyBTN">upgrade:{subjectsOfUpgrade}</button>
					:
					<button name={props.name} className="buildingNoBuyBTN">can't afford</button>
				}
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
export default Upgrade;
