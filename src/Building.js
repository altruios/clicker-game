import React from 'react';

function Building(props)
	{



		return(

		<div>
			<div> BUY:
				{props.buyPrice.grey>0 ? "grey: "+props.buyPrice.grey+" ":null} 
				{props.buyPrice.red>0 ? "red: "+props.buyPrice.red+" ":null} 

				{props.buyPrice.green>0 ? "green: "+props.buyPrice.green+" ":null} 
				{props.buyPrice.blue>0 ? "blue: "+props.buyPrice.blue+" ":null} 
				</div>
			 <div>SELL: {props.sellPrice} </div>
		{props.isBuyable ? <button name={props.name} onClick={props.HandleClick}>
		{props.name}
		
		</button>:null}
			<div> COUNT:{props.count}
		</div>
		</div>

		)
}


export default Building;
