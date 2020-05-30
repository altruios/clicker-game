
	
const gameData={
		
	buildingData:
		[
			{
			name:"fountain of Grey",
			buyPrice:{grey: 10, red: 0, green:0, blue: 0},
			count:0,
			subjectsOfIncrease:["red, green, blue"],
         	isBuyable:false,
            sellPrice:0.5, 
           	isUnlocked:true
           },


			{
			name:"fountain of red",
			buyPrice:{grey: 10, red: 10, green:0, blue: 0},
			count:0,
			subjectsOfIncrease:["red, purple"],
         	isBuyable:false,
            sellPrice:0.5, 
           	isUnlocked:false
         	 },
			{
			name:"fountain of blue",
			buyPrice:{grey: 10, red: 0, green:0, blue: 10},
			count:0,
			subjectsOfIncrease:["blue, purple"],
         	isBuyable:false,
            sellPrice:5, 
           	isUnlocked:false,
         	 },
         	{
			name:"fountain of green",
			buyPrice:{grey: 10, red: 0, green:10, blue: 0},
			count:0,
			subjectsOfIncrease:["green, turquoise"],
         	isBuyable:true,
            sellPrice:50, 
           	isUnlocked:false
         	 }
		],
	clickerData:
		[
			{
			name:"grey",
			subjectsOfIncrease:["grey"],
           	isUnlocked:true,
           	value:1
           },
           	{
			name:"red",
			subjectsOfIncrease:["red"],
           	isUnlocked:false,
           	value:1
           },
           	{
			name:"green",
			subjectsOfIncrease:["green"],
           	isUnlocked:false,
           	value:1
           },
            {
			name:"blue",
			subjectsOfIncrease:["blue"],
           	isUnlocked:false,
           	value:1
           }

		],
	resourceData:
		[
			{	
			name:"grey",
			resouceMax:100,
			isUnlocked:true,
			changePerTick:0,
         	counterTillStopped:100,
         	amount:0
         	},
			{
			name:"red",
			resouceMax:100,
			isUnlocked:true,
			changePerTick:0,
         	counterTillStopped:100,
         	         	amount:0

           
         	 },
			{
			name:"green",
			resouceMax:100,
			isUnlocked:true,
			changePerTick:0,
         	counterTillStopped:100,
         	         	amount:0

         	 },
         	{
			name:"blue",
			resouceMax:100,
			isUnlocked:true,
			changePerTick:0,
         	counterTillStopped:100,
         	         	amount:0

         	 },
         	 {
         	 name:"purple",
			resouceMax:100,
			isUnlocked:false,
			changePerTick:0,
         	counterTillStopped:100,
         	         	amount:0

         	 }
         	 ,{
         	 name:"turquoise",
			resouceMax:100,
			isUnlocked:false,
			changePerTick:0,
         	counterTillStopped:100,
         	         	amount:0

         	 }

		]
	}


export default gameData