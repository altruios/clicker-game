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
   this.HandleClick = this.HandleClick.bind(this);
   this.HandleChange = this.HandleChange.bind(this);
   this.buy = this.buy.bind(this);
   this.gainResource = this.gainResource.bind(this);

  }
  HandleChange(event)
    {

  }
  HandleClick(event)
    {
    const name = event.target.name;
    const target = this.state.buildings.find(building=>building.name===name);
    const countCurrent= target.count + 1;
    console.log("Test test test");

    if(target.isBuyable === true)
      {
      this.buy(target);  
      let lastBuildings = this.state.buildings.slice();
      let newBuildings = lastBuildings.map(building=>
        {
        if(building.name === name)
          building.count = countCurrent;
        return building;
      }

      )

     this.setState({buildings:newBuildings});
    }

    else{
      console.log("notBuyable");
    }
  }
  buy(target) 
    { 
    console.log("test test buy");
 
    const cost = Array.from(target.buyPrice);
    let lastResources = this.state.resources.slice();
    let newResources = lastResources.map(resource=>resource -= cost.filter(price=> price === resource))
    this.setState({resouces:newResources});
    
  }
  gainResource(event)
    {
    console.count("gain button");
    const name = event.target.name;
    this.setState( (prevState)=>
      {
      const newResources =  prevState.resources.map(resource=>
        {
        const tempResource = resource;  
        if(resource.name === name)  
          {
          tempResource.amount = Number(resource.amount) + 1 //Number(prevState.clickers.find(x=>x.name===name).value)
        }  
        return tempResource;
      });
      console.log(prevState.resources.find(item=>item.name===name).amount, "old");
      console.log(newResources.find(item=>item.name===name).amount, "new");
      return {resources: newResources}
    });
  }
  render()
    {
    const buildings = this.state.buildings.map(buildingData=>
      {
      return(
        <Building 
          name ={buildingData.name}
          buyPrice={buildingData.buyPrice}
          count = {buildingData.count}
          subjectsOfIncrease = {buildingData.subjectsOfIncrease}
          isBuyable = {buildingData.isBuyable}
          sellPrice = {buildingData.sellPrice}
          isUnlocked = {buildingData.isUnlocked}
          HandleClick = {this.HandleClick}
          key={buildingData.name}
          
        />)
    });
    const resources = this.state.resources.map(resourceData=>
      {
      return(

        <Resource 
         name ={resourceData.name}
         resouceMax = {resourceData.resourceMax}
          isUnlocked = {resourceData.isUnlocked}
          changePerTick = {resourceData.changePerTick}
          counterTillStopped = {resourceData.countTillStopped}
          amount={resourceData.amount}
                 key={resourceData.name}

        />)
    })   

    const clickers = this.state.clickers.map(clickerData=>
      {
      return(
        <Clicker
          name={clickerData.name}  
          HandleClick = {this.gainResource}
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
