
	
const gameData={
		
	buildingData:
		[
			{
			name:"fountain of Grey",
			buyPrice:[{name:"grey", cost: 1}],
			count:0,
			subjectsOfIncrease:[{name:"grey", amount: 0.1, max: 120}],
			increaseRatio:0.1,
         	isBuyable:false,
            sellPrice:0.5, 
           	isUnlocked:true
           },

			{
			name:"fountain of red",
			buyPrice:[{name:"grey", cost: 0.5}, {name:"red", cost: 1}],
			count:0,
			subjectsOfIncrease:[{name:"red", amount: 0.1, max: 100}],
			increaseRatio:2,
         	isBuyable:false,
            sellPrice:0.5, 
           	isUnlocked:false
         	 }
		
		],
	clickerData:
		[
			{
			name:"grey",
			building:false,
			subjectsOfIncrease:[{name:"grey", amount: 0.1, max: 10}],
           	isUnlocked:true,
           	amount:1
           },
           	{
			name:"red",
			building:true,
			subjectsOfIncrease:[{name:"red", amount: 0.1, max:10}],
           	isUnlocked:false,
           	amount:1
           }           

		],
	resourceData:
		[
			{	
			name:"grey",
			max:100,
			isUnlocked:true,
			changePerTick:0.001,
         	amount:0
         	},
			{
			name:"red",
			max:100,
			isUnlocked:true,
			changePerTick:0,
         	amount:0

           
         	 }
         	
		]
	}


export default gameData