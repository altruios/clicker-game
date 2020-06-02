
	
const gameData={
		
	buildingData:
		[
			{
			name:"fountain of Grey",
			buyPrice:[{name:"grey", cost: 1}],
			count:0,
			subjectsOfIncrease:[{name:"grey", amount: 0.01, max: 120}],
						unlocks:[],

			increaseRatio:1.3,
         	isBuyable:false,
           	isUnlocked:true
           },

			{
			name:"fountain of red",
			buyPrice:[{name:"grey", cost: 0.5}, {name:"red", cost: 1}],
			count:0,
			subjectsOfIncrease:[{name:"red", amount: 0.01, max: 120}],
						unlocks:[],

			increaseRatio:2,
         	isBuyable:false,
           	isUnlocked:false
         	 },

			{
			name:"fountain of green",
			buyPrice:[{name:"grey", cost: 0.5}, {name:"green", cost: 1}],
			count:0,
			subjectsOfIncrease:[{name:"green", amount: 0.01, max: 120}],
						unlocks:[],

			increaseRatio:2,
         	isBuyable:false,
           	isUnlocked:false
         	 },

			{
			name:"fountain of blue",
			buyPrice:[{name:"grey", cost: 0.5}, {name:"blue", cost: 1}],
			count:0,
			subjectsOfIncrease:[{name:"blue", amount: 0.01, max: 120}],
						unlocks:[],

			increaseRatio:2,
         	isBuyable:false,
           	isUnlocked:false
         	 },
         	 	{
			name:"fountain of white",
			buyPrice:[{name:"grey", cost: 0.5}, {name:"red", cost: 1},{name:"green", cost: 1},{name:"blue", cost: 1}],
			count:0,
			subjectsOfIncrease:[{name:"grey", amount: 0.01, max: 120},{name:"red", amount: 0.01, max: 100},{name:"green", amount: 0.01, max: 100},{name:"blue", amount: 0.01, max: 100}],
			unlocks:[],
			increaseRatio:2,
         	isBuyable:false,
           	isUnlocked:false
         	 },
			{
			name:"fountain of purple",
			buyPrice:[{name:"red", cost: 50}, {name:"blue", cost: 50}],
			count:0,
			subjectsOfIncrease:[{name:"blue", amount: 0.01, max: 50},{name:"red", amount: 0.01, max: 50},{name:"purple", amount: 0.01, max: 100}],
			unlocks:[{name:"purple", type:"resource"}],
			increaseRatio:2,
         	isBuyable:false,
           	isUnlocked:false
         	 }
         	 ,
			{
			name:"fountain of teal",
			buyPrice:[{name:"green", cost: 50}, {name:"blue", cost: 50}],
			count:0,
			subjectsOfIncrease:[{name:"blue", amount: 0.01, max: 50},{name:"green", amount: 0.01, max: 50},{name:"teal", amount: 0.01, max: 100}],
			unlocks:[{name:"teal", type:"resource"}],
			increaseRatio:2,
         	isBuyable:false,
           	isUnlocked:false
         	 }
         	 ,
			{
			name:"fountain of orange",
			buyPrice:[{name:"red", cost: 50}, {name:"green", cost: 50}],
			count:0,
			subjectsOfIncrease:[{name:"green", amount: 0.01, max: 50},{name:"red", amount: 0.01, max: 50},{name:"orange", amount: 0.01, max: 100}],
			unlocks:[{name:"orange", type:"resource"}],
			increaseRatio:2,
         	isBuyable:false,
           	isUnlocked:false
         	 }
		],
	clickerData:
		[
			{
			name:"grey",
			building:false,
			subjectsOfIncrease:[{name:"grey", amount: 0.03, max: 10}],
           	isUnlocked:true,
           	amount:0.1
           },
           	{
			name:"red",
			building:true,
			subjectsOfIncrease:[{name:"red", amount: 0.01, max:10}],
           	isUnlocked:true,
           	amount:0.1
           },
           	{
			name:"green",
			building:true,
			subjectsOfIncrease:[{name:"green", amount: 0.01, max:10}],
           	isUnlocked:true,
           	amount:0.1
           }     ,
           	{
			name:"blue",
			building:true,
			subjectsOfIncrease:[{name:"blue", amount: 0.01, max:10}],
           	isUnlocked:true,
           	amount:0.1
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
         	 },
         	{	
			name:"green",
			max:100,
			isUnlocked:true,
			changePerTick:0,
         	amount:0
         	},
         	{	
			name:"blue",
			max:100,
			isUnlocked:true,
			changePerTick:0,
         	amount:0
         	},
         	{	
			name:"purple",
			max:90,
			isUnlocked:false,
			changePerTick:0,
         	amount:0
         	},
         	{	
			name:"teal",
			max:90,
			isUnlocked:false,
			changePerTick:0,
         	amount:0
         	},
         	{	
			name:"orange",
			max:90,
			isUnlocked:false,
			changePerTick:0,
         	amount:0
         	}
         	
		]
	}


export default gameData