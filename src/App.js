import React from 'react';
import './App.css';
import gameData from "./gameData.js"
import Building from "./Building"
import Resource from "./Resource"
import Clicker from "./Clicker"
class App extends React.Component 
  {
  constructor()
    {
    super();
    this.state = {
      buildings:gameData.buildingData,
      resources:gameData.resourceData,
      clickers:gameData.clickerData

    };
   this.handleClicker = this.handleClicker.bind(this);
   this.buy = this.buy.bind(this);
   this.checkBuyingStatus = this.checkBuyingStatus.bind(this);
   this.buyState = this.buyStatus.bind(this);
   this.handleBuildingBuy = this.handleBuildingBuy.bind(this);
  }
  gameTime()
    {
    const gameTick = setInterval(()=>
        {
        this.state.resources.forEach(resource=>this.tickResource(resource));
        this.state.buildings.forEach(building=>this.checkBuyingStatus(building));
      },100);
  }

  tickResource(resource)
    {
    const targetResource = resource;  
    this.setState((prevState) =>
      {  
      const newResources = prevState.resources.map(lastResource=>
        {
        if(lastResource.name === targetResource.name)
          {
          resource.amount = Number(Math.min(resource.max,resource.amount + resource.changePerTick).toFixed(4));
          resource.counterTillStopped = Math.max(0, resource.counterTillStopped - resource.changePerTick);
        }
        return lastResource;
      }); 

      return {resources: newResources}
    });
  }

  componentDidMount(prevProps, prevState)
    {
    this.gameTime(); 
  }
  handleBuildingBuy(event)  
    {
    console.log(event.target);
    const name = event.target.name;
    const targetBuilding = this.state.buildings.find(building=>building.name === name)
    if(targetBuilding.isBuyable) 
      {
      this.buy(targetBuilding);
    }
  }
  buy(building) 
    { 
    const increaseObjectArray = building.subjectsOfIncrease; 
    const costObjectArray = building.buyPrice 
    const name = building.name;
    this.setState(prevState=>
      {
     
      const newResources= prevState.resources.map(resource=>
        {
        const targetCost = increaseObjectArray.find(x=>x.name === resource.name);
        if(targetCost)
          {
           console.log(targetCost.amount, resource.max)
           console.log(resource.amount);
           console.log(building.subjectsOfIncrease.find(x=>x.name===resource.name).max) 
          resource.amount = Number((resource.amount - targetCost.amount).toFixed(4));
          console.log(resource.amount);

          const buildingCount = (building.count + 1);
          const subject = building.subjectsOfIncrease.find(x=>x.name===resource.name);
          console.log("subject", subject);
          console.log(buildingCount);
          const subMax = subject.max;
          const subAmount = subject.amount;
          console.log(subAmount);
          console.log(resource.max);
          resource.max = Number((resource.max + buildingCount * subMax).toFixed(4));
          resource.changePerTick = Number((resource.changePerTick + buildingCount*subAmount).toFixed(4));
        }
        return resource;
      });
      const newBuildings = prevState.buildings.map(build=>
        {
        if(building.name === build.name)
          {
          build.count = build.count + 1;
          build.buyPrice.forEach(cost=>
            {
            cost.cost = Number((cost.cost * 2.22).toFixed(4));
          })

        }
         return build;
      });

      return{
        resources:newResources,
        buildings:newBuildings,
      }
    });

  }  
  handleClicker(event)
    {
    const {name, value} = event.target;  
    console.log("clicked:", name);
    console.log(this.state); 
    this.setState(prevState=>
      {
      const targetClicker = prevState.clickers.find(x=>x.name ===name);
      const newResources = prevState.resources.map(resource=>
          {
           const targetIncrease =  targetClicker.subjectsOfIncrease.find(x=>x.name===resource.name)
          if(targetIncrease)
            {
            resource.amount = Number(Math.min(resource.max,resource.amount + targetIncrease.amount).toFixed(4));
          }
          return resource;
        })


      return {resources:newResources}
    })
  }

  checkBuyingStatus(building)
    {
    this.setState((prevState)=>
      {  
      const targetResources = prevState.resources.filter((resource)=>
        {
        const targetBuyPriceObject = building.buyPrice.find(x=>x.name===resource.name);  
        if(targetBuyPriceObject)
          {
          return resource;
        }
      });
      
      const newBuildings = prevState.buildings.map((build)=>
        {
        if(build.name === building.name)
          { 
          const buyStatus =  this.buyStatus(targetResources, building.buyPrice)
          build.isBuyable = buyStatus;

          if(buyStatus){
            build.isUnlocked = true;
          }
        }

        return build
      });

    return{buildings:newBuildings};
    });
}
  buyStatus(resourceArray, costArray)
    {
    let buyStatus = false;
    let buyLength = costArray.length;
    resourceArray.forEach(resource=>  
      {
      const targetCost = costArray.find(x=>x.name===resource.name);
      if(targetCost.cost<=resource.amount) 
        {
        buyLength = buyLength - 1;
      }
    });
    if(buyLength === 0)
      {
      buyStatus = true;
    }

    return buyStatus;
  }

 
  
  render()
    {
    const buildings = this.state.buildings.map(buildingData=>
      {
      return(
        <Building 

          name ={buildingData.name}
          handleBuildingBuy={this.handleBuildingBuy}
          buyPrice={buildingData.buyPrice}
          count = {buildingData.count}
          subjectsOfIncrease = {buildingData.subjectsOfIncrease}
          isBuyable = {buildingData.isBuyable}
          isUnlocked = {buildingData.isUnlocked}
          key={buildingData.name}
          
        />)
    });
    const resources = this.state.resources.map(resourceData=>
      {

        return(

        <Resource 
          name ={resourceData.name}
          max = {resourceData.max}
          isUnlocked = {resourceData.isUnlocked}
          changePerTick = {resourceData.changePerTick}
          amount={resourceData.amount}
          key={resourceData.name}

        />)
    });   

    const clickers = this.state.clickers.map(clickerData=>
      {
      return(
        <Clicker
          name={clickerData.name} 
          handleClicker = {this.handleClicker}
          value = {clickerData.amount}
          key={clickerData.name}
        />

      )
    })




  return (

        <div className="App">
        {buildings}
        {resources}
        {clickers}
        </div>
       );
      }
    
}
export default App;
