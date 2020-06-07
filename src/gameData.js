
	
const gameData={
		
	buildingData:
		[
			{
			id:0,	
			name:"fountain of Grey",
			buyPrice:[{name:"grey", cost: 1}],
			count:0,
			itemType:"buildings",
			type: "greyScale",
			subjectsOfIncrease:[{name:"grey", amount: 0.02, max: 120}],
			unlocks:[{name:"pens1", type:"sciences"}],
			increaseRatio:1.3,
         	isBuyable:false,
           	isUnlocked:true
        },
			{
			id:1,	
			name:"fountain of red",
			buyPrice:[{name:"grey", cost: 0.5}, {name:"red", cost: 1}],
			count:0,
			itemType:"buildings",
			type: "primary",
			subjectsOfIncrease:[{name:"red", amount: 0.02, max: 120}],
			unlocks:[],
			increaseRatio:1.22,
         	isBuyable:false,
           	isUnlocked:false
        },
			{
			id:2,	
			name:"fountain of green",
			buyPrice:[{name:"grey", cost: 0.5}, {name:"green", cost: 1}],
			count:0,
			itemType:"buildings",

			type: "primary",
			subjectsOfIncrease:[{name:"green", amount: 0.02, max: 120}],
			unlocks:[],
			increaseRatio:1.22,
         	isBuyable:false,
           	isUnlocked:false
        },

			{
			id:3,	
			name:"fountain of blue",
			buyPrice:[{name:"grey", cost: 0.5}, {name:"blue", cost: 1}],
			count:0,
			itemType:"buildings",
			type: "primary",
			subjectsOfIncrease:[{name:"blue", amount: 0.02, max: 120}],
			unlocks:[],

			increaseRatio:1.22,
         	isBuyable:false,
           	isUnlocked:false
        },
         	{
         	id:4,	
			name:"fountain of white",
			buyPrice:[{name:"grey", cost: 0.5}, {name:"red", cost: 1},{name:"green", cost: 1},{name:"blue", cost: 1}],
			count:0,
			itemType:"buildings",
			type: "greyScale",
			subjectsOfIncrease:[{name:"grey", amount: 0.07, max: 120},{name:"red", amount: 0.03, max: 100},{name:"green", amount: 0.03, max: 100},{name:"blue", amount: 0.03, max: 100}],
			unlocks:[],
			increaseRatio:1.22,
         	isBuyable:false,
           	isUnlocked:false
        },
			{
			id:5,	
			name:"fountain of purple",
			buyPrice:[{name:"red", cost: 10}, {name:"blue", cost: 10}],
			count:0,
			itemType:"buildings",
			type: "secondary",
			subjectsOfIncrease:[{name:"blue", amount: 0.01, max: 50},{name:"red", amount: 0.01, max: 50},{name:"purple", amount: 0.01, max: 100}],
			unlocks:[{name:"purple", type:"resources"}],
			increaseRatio:1.22,
         	isBuyable:false,
           	isUnlocked:false
        },
			{
			id:6,	
			name:"fountain of teal",
			buyPrice:[{name:"green", cost: 20}, {name:"blue", cost: 20}],
			count:0,
			itemType:"buildings",
			type: "secondary",
			subjectsOfIncrease:[{name:"blue", amount: 0.01, max: 50},{name:"green", amount: 0.01, max: 50},{name:"teal", amount: 0.01, max: 100}],
			unlocks:[{name:"teal", type:"resources"}],
			increaseRatio:1.22,
         	isBuyable:false,
           	isUnlocked:false
        },
			{
			id:7,	
			name:"fountain of orange",
			buyPrice:[{name:"red", cost: 30}, {name:"green", cost: 30}],
			count:0,
			itemType:"buildings",
			type: "secondary",
			subjectsOfIncrease:[{name:"green", amount: 0.01, max: 50},{name:"red", amount: 0.01, max: 50},{name:"orange", amount: 0.01, max: 100}],
			unlocks:[{name:"orange", type:"resources"}],
			increaseRatio:1.22,
         	isBuyable:false,
           	isUnlocked:false
        },
        {
			id:8,	
			name:"fountain of black",
			buyPrice:[{name:"grey", cost: 50}],
			count:0,
			itemType:"buildings",
			type: "greyScale",
			subjectsOfIncrease:[{name:"black", amount: 0.01, max: 100}],
			unlocks:[{name:"black", type:"resources"},{name:"trade1", type:"sciences"}],
			increaseRatio:1.22,
         	isBuyable:false,
           	isUnlocked:false
        }
	],
	clickerData:
		[
			{
			name:"grey",
			building:false,

			type:"greyScale",
			itemType:"clickers",
			subjectsOfIncrease:[{name:"grey", amount: 0.03, max: 10}],
           	isUnlocked:true,
        },
           	{
			name:"red",
			building:true,
			itemType:"clickers",
			type:"primary",
			subjectsOfIncrease:[{name:"red", amount: 0.02, max:10}],
           	isUnlocked:true,
        },
           	{
			name:"green",
			building:true,
			itemType:"clickers",
			type:"primary",
			subjectsOfIncrease:[{name:"green", amount: 0.02, max:10}],
           	isUnlocked:true,
        },
           	{
			name:"blue",
			building:true,
			itemType:"clickers",
			type:"primary",
			subjectsOfIncrease:[{name:"blue", amount: 0.02, max:10}],
           	isUnlocked:true,
        }         

	],
	resourceData:
		[
			{	
			name:"black",
			type:"greyScale",
			itemType:"resources",
			max:100,
			isUnlocked:false,
			changePerTick:0,
         	amount:0
        },
			{	
			name:"grey",
			type:"greyScale",
			itemType:"resources",
			max:100,
			isUnlocked:true,
			changePerTick:0.001,
         	amount:0
        },
			{
			name:"red",
			type:"primary",
			itemType:"resources",
			max:100,
			isUnlocked:true,
			changePerTick:0,
         	amount:0
        },
         	{	
			name:"green",
			type:"primary",
			itemType:"resources",
			max:100,
			isUnlocked:true,
			changePerTick:0,
         	amount:0
        },
         	{	
			name:"blue",
			type:"primary",
			itemType:"resources",
			max:100,
			isUnlocked:true,
			changePerTick:0,
         	amount:0
        },
         	{	
			name:"purple",
			type:"secondary",
			itemType:"resources",
			max:90,
			isUnlocked:false,
			changePerTick:0,
         	amount:0
        },
         	{	
			name:"teal",
			type:"secondary",
			itemType:"resources",
			max:90,
			isUnlocked:false,
			changePerTick:0,
         	amount:0
        },
         	{	
			name:"orange",
			type:"secondary",
			itemType:"resources",
			max:90,
			isUnlocked:false,
			changePerTick:0,
         	amount:0
        }
         	
	],
	scienceData:[
		{
		name:"trade1", 
		id:0,
		itemType:"sciences",
		isUnlocked:false,
		unlocks:[{type:"traders", name:"greyTrader"}, {type:"traders", name:"blackTrader"}],
		buyPrice:[{name:"teal", cost: 15},{name:"orange", cost: 15},{name:"purple", cost: 15}],
		description:"unlocks trade window",
		isUnlocked:false,
		isBuyable:false,
		bought:false

	},
		{
		name:"pens1",isUnlocked:false,
		id:1,
	 	unlocks:[
			{name:"greyPen", type:"upgrades"},
			{name:"redPen", type:"upgrades"},
			{name:"greenPen", type:"upgrades"},
			{name:"bluePen", type:"upgrades"}
		],

		itemType:"sciences",
		buyPrice:[
			{name:"black", cost: 1},
			{name:"orange", cost: 10},
			{name:"teal", cost: 10},
			{name:"purple", cost: 10}

		],
		description:"unlocks pens, which increase your collection effiency",
		isUnlocked:false,
		isBuyable:false,
		bought:false		
	}
	],
	upgradeData:
		[
		{
			id:0,	
			name:"greyPen", 
			type:"clickers", 
			itemType:"upgrades",
			subjectsOfIncrease:[{name:"grey", amount:0.1}],
			buyPrice:[
				{name:"black", cost: 1},
				{name:"grey", cost: 1}
			],
			count:0,
			oneTimeBuy:false,
			isUnlocked:false,
			isBuyable:false
		},
		{
			id:1,	
			name:"redPen", 
			type:"clickers", 
			itemType:"upgrades",
			subjectsOfIncrease:[{name:"red", amount:0.1}],

			buyPrice:[
				{name:"black", cost:1},
				{name:"orange", cost: 0.5},
				{name:"purple", cost:0.5}
			],
			count:0,
			oneTimeBuy:false,
			isUnlocked:false,
			isBuyable:false
		},
		{
			id:2,	
			name:"greenPen", 
			type:"clickers", 
			itemType:"upgrades",
			subjectsOfIncrease:[{name:"green", amount:0.1}],
			buyPrice:[
				{name:"black", cost:1},
				{name:"teal", cost: 0.5},
				{name:"orange", cost: 0.5}
			],
			count:0,
			oneTimeBuy:false,
			isUnlocked:false,
			isBuyable:false
		},
		{
			id:3,		
			name:"bluePen", 
			type:"clickers", 
			itemType:"upgrades",
			subjectsOfIncrease:[{name:"blue", amount:0.1}],
			buyPrice:[
				{name:"black", cost:1},
				{name:"purple", cost: 0.5},
				{name:"teal", cost: 0.5}
			],
			count:0,
			oneTimeBuy:false,
			isUnlocked:false,
			isBuyable:false
		}
	],
	tradeData:[
		{
		id:0,	
		name:"greyTrader", 
		type:"trade", 
			itemType:"traders",

		tradeRatios:{name:"grey", in:3, out:1, allowed:"primary"},
				buyPrice:[{name:"grey", cost:3}],

		isUnlocked:false,
		isBuyable:false
	},
		{
		id:1,	
		name:"blackTrader", 
		type:"trade", 
			itemType:"traders",
		tradeRatios:{name:"black", in:6, out:1, allowed:"secondary"},
		buyPrice:[{name:"black", cost:6}],
		isUnlocked:false,
		isBuyable:false
		},
	]
}


export default gameData