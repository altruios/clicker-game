import React from 'react';
import './App.css';
import gameData from "./gameData.js"
import Building from "./Building"
import Resource from "./Resource"
import Clicker from "./Clicker"
import Science from "./Science"
import Upgrade from "./Upgrade"
import Trader from "./Trader"

class App extends React.Component 
  {
  constructor()
    {
    super();
   this.handleClicker = this.handleClicker.bind(this);
   this.buyBuilding = this.buyBuilding.bind(this);
   this.buyScience = this.buyScience.bind(this);
   this.checkBuyingStatus = this.checkBuyingStatus.bind(this);
   this.buyState = this.buyStatus.bind(this);
   this.handleBuildingBuy = this.handleBuildingBuy.bind(this);
   this.handleUpgrade = this.handleUpgrade.bind(this);
   this.unlock = this.unlock.bind(this);
   this.handleBuyScience=this.handleBuyScience.bind(this);
   this.handleTrade=this.handleTrade.bind(this);
   this.saveGame=this.saveGame.bind(this);
   if(localStorage.getItem("save")) 
      {
      const savedState = JSON.parse(localStorage.getItem("save"));
      this.state =
        {
        buildings:savedState.buildings,
        resources:savedState.resources,
        clickers:savedState.clickers,
        sciences:savedState.sciences,
        upgrades:savedState.upgrades,
        traders:savedState.traders,
        resetCount:savedState.resetCount  
      };
      console.log(this.state);
    }
    else{
      this.state = 
        {
        buildings:gameData.buildingData,
        resources:gameData.resourceData,
        clickers:gameData.clickerData,
        sciences:gameData.scienceData,
        upgrades:gameData.upgradeData,
        traders:gameData.tradeData,
        resetCount:0
      }
    
      console.log(this.state);


    }
  }
  saveGame(state){

    const saveState = JSON.stringify(state);
    localStorage.setItem("save",saveState);
  }
  gameTime()
    {
    const gameTick = setInterval(()=>
      {

      this.state.resources.forEach(resource=>this.tickResource(resource));
    },1000);
    const checkTicks = setInterval(()=>
      {
      this.state.buildings.forEach(building=>this.checkBuyingStatus(building));

      this.state.sciences.forEach(science=>{
        if(science.isUnlocked){
          this.checkBuyingStatus(science);
        }
      });
      this.state.upgrades.forEach(upgrade=>{
        if(upgrade.isUnlocked){
          this.checkBuyingStatus(upgrade);
        }
      })
      this.state.traders.forEach(trade=>{
        if(trade.isUnlocked)
          {
          this.checkBuyingStatus(trade);
        }
      })
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
  componentDidUpdate()
    {
    this.saveGame(this.state);
  }
  handleBuildingBuy(event)  
    {
    const name = event.target.name;
    const targetBuilding = this.state.buildings.find(building=>building.name === name)
    if(targetBuilding.isBuyable) 
      {
      const unlocks = targetBuilding.unlocks;
      if(unlocks.length>0)
        {
        unlocks.forEach(whatToUnlock=>this.unlock(whatToUnlock));
      
         }


      
      this.buyBuilding(targetBuilding);
    }
  }
  buyBuilding(building) 
    { 
    const increaseObjectArray = building.subjectsOfIncrease; 
    const costObjectArray = building.buyPrice 
    const name = building.name;
    this.setState(prevState=>
      {
     
      const newResources= prevState.resources.map(resource=>
        {
        const targetCost = costObjectArray.find(x=>x.name === resource.name);    
        const targetIncrease = increaseObjectArray.find(x=>x.name===resource.name);
        if(targetIncrease)
          {
           console.log("increasing the maximum of resource:",resource) 
          const buildingCount = (building.count + 1);
          const subject = building.subjectsOfIncrease.find(x=>x.name===resource.name);
          const subMax = subject.max;
          const subAmount = subject.amount;
          resource.max = Number((resource.max + subMax).toFixed(4));
          resource.changePerTick = Number((resource.changePerTick + subAmount).toFixed(5));
        }
        if(targetCost)
          {
           console.log("this costs this much:", resource.name, targetCost.cost) 
          resource.amount = Number((resource.amount - targetCost.cost).toFixed(4)); 
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
            cost.cost = Number((cost.cost * build.increaseRatio).toFixed(4));
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
  handleBuyScience(event){
    console.log(event);
    const targetScience = this.state.sciences.find(x=>x.name===event.target.name);
    console.log(targetScience);
    this.buyScience(targetScience);
  } 
  buyScience(science)
    {
    const costObjectArray = science.buyPrice;
    console.log(costObjectArray) 
    const name = science.name;
    this.setState(prevState=>
      {
      const newResources= prevState.resources.map(resource=>
        {
        const targetCost = costObjectArray.find(x=>x.name === resource.name);    
        if(targetCost)
          {
          resource.amount = Number((resource.amount - targetCost.cost).toFixed(4)); 
        }
        return resource;
      });
      const newSciences = prevState.sciences.map(scienceBuilding=>
        {
        if(science.name === scienceBuilding.name)
          {
          scienceBuilding.isBought = true;
          
        }
         return scienceBuilding;
      });

      return{
        resources:newResources,
        sciences:newSciences,
      }
    });
    console.log(this.state);
    science.unlocks.forEach(lock=>this.unlock(lock));



  }
  unlock(whatToUnlock)
    {
      const unlockType = whatToUnlock.type;
      console.log(unlockType);
      console.log("unlocking");
        this.setState((prevState)=>
          {
           console.log(prevState[unlockType]); 
          const newitems = prevState[unlockType].map(item=>
            {
            if(whatToUnlock.name === item.name)
              {
              console.log(whatToUnlock.name,"isunlocking");  
              item.isUnlocked = true;
            }
            return item;
          });
          return {[unlockType]:newitems}
        });
    
  }
  handleClicker(event)
    {
     console.log(event);
     console.log(event.target); 
    const {name} = event.target;  
    this.setState(prevState=>
      {
      const targetClicker = prevState.clickers.find(x=>x.name === name);
      if(targetClicker === undefined)
        {
        console.error("undefined,",name);}
      const newResources = prevState.resources.map(resource=>
          {
           const targetIncrease =  targetClicker.subjectsOfIncrease.find(x=>x.name===resource.name)
          if(targetIncrease)
            {
            resource.amount = Number(Math.min(resource.max,resource.amount + targetIncrease.amount).toFixed(4));
          }
          return resource;
        });


      return {resources:newResources}
    });

  }
  handleUpgrade(event)
    {
    const name = event.target.name;
    const targetUpgrade = this.state.upgrades.find(x=>x.name===name);
    const type = targetUpgrade.type;
    const subjects = targetUpgrade.subjectsOfIncrease;
    const buyPrice = targetUpgrade.buyPrice;
    subjects.forEach(subject=>
      {
      this.setState(prevState=>
        {

        const newItems = prevState[type].map(item=>
          {
          if(item.name === subject.name)
            {
            const newSubjects = item.subjectsOfIncrease.map((x)=>
              {
              x.amount = Number((x.amount + subject.amount).toFixed(4));
              return x;
            });
            console.log("new subjects");
            item.subjectsOfIncrease = newSubjects;
            console.log(item)
           
          }
          return item;
        })
         const newResources = prevState.resources.map(resource=>{
          buyPrice.forEach(price=>{
            if(price.name === resource.name)
              {
              resource.amount = Number((resource.amount - price. cost).toFixed(4));
            }
          });
                 return resource;
        })
        const newUpgrades = prevState.upgrades.map(upgrade=>
          {
          if(upgrade.name === name) 
            {
            const newPrice = upgrade.buyPrice.map(price=>
              {
              price.cost = Number((price.cost*1.54).toFixed(4));
              return price;
            })
            upgrade.buyPrice = newPrice;
            upgrade.count = upgrade.count + 1;
            console.log(newPrice);
          }
          return upgrade;
        })

   

        return {[type]:newItems, upgrades:newUpgrades, resources: newResources}

    });
    });
  }

  handleTrade(event){
    const targetTrader = this.state.traders.find(x=>x.name===event.target.name);
    const targetItem = event.target.value;
    console.log(event.target.className, "is classname");


    this.setState(prevState=>{
      const newResources = prevState.resources.map(resource=>{
        if(resource.name ===targetTrader.tradeRatios.name)
          {
          const tradeRatio = targetTrader.tradeRatios.in; 
          resource.amount = Number((resource.amount - tradeRatio).toFixed(4));
        }
        if(resource.name ===targetItem)
          {
           console.log("adding to ", resource.name,"becuase target is", targetItem) 
          const tradeRatio = targetTrader.tradeRatios.out;
          resource.amount = Number((resource.amount + tradeRatio).toFixed(4));

        }
      return resource;
      });


      return{resources:newResources}
    })
  }


  checkBuyingStatus(item)
    {
     let type = item.itemType; 
    this.setState((prevState)=>
      {  
      const targetResources = prevState.resources.filter((resource)=>
        {
        const targetBuyPriceObject = item.buyPrice.find(x=>x.name===resource.name);  
        if(targetBuyPriceObject)
          {
          return resource;
        }
      });
      
      const newItem = prevState[type].map((build)=>
        {
        if(build.name === item.name)
          { 
          const buyStatus =  this.buyStatus(targetResources, item.buyPrice);

          build.isBuyable = buyStatus;

          if(buyStatus){
            build.isUnlocked = true;
          }
        }

        return build;
      });

    return{[type]:newItem};
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
          key={buildingData.id}
          name ={buildingData.name}
          currentPrices = {this.state.resources}
          handleBuildingBuy={this.handleBuildingBuy}
          buyPrice={buildingData.buyPrice}
          count = {buildingData.count}
          subjectsOfIncrease = {buildingData.subjectsOfIncrease}
          isBuyable = {buildingData.isBuyable}
          isUnlocked = {buildingData.isUnlocked}
          subjectData = {buildingData.subjectsOfIncrease}
          
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
          subjectData = {clickerData.subjectsOfIncrease}
          key={clickerData.name}
        />

      )
    });

    const sciences = this.state.sciences.map(scienceData=>{
      return(
        <Science
          key={scienceData.id}
          name={scienceData.name}
          handleBuyScience = {this.handleBuyScience}
          isBought = {scienceData.isBought}
          currentPrices = {this.state.resources}

          isUnlocked = {scienceData.isUnlocked}
          description = {scienceData.description}
          isBuyable = {scienceData.isBuyable}
          buyPrice = {scienceData.buyPrice} />
        )
    })
    const upgrades = this.state.upgrades.map(upgradeData=>{
      return(
        <Upgrade 
          key={upgradeData.id}
          name = {upgradeData.name}
          buyPrice = {upgradeData.buyPrice}
          amount={upgradeData.amount}
          isUnlocked = {upgradeData.isUnlocked}
          isBuyable = {upgradeData.isBuyable}
          upgradeType = {upgradeData.type}
          count={upgradeData.count}
          handleUpgrade = {this.handleUpgrade}
          currentPrices = {this.state.resources}
          subjectData={upgradeData.subjectsOfIncrease}

        />
        )
    })
    const traders = this.state.traders.map(traderData=>{
      const canTradeWith = this.state.resources.filter(resource=>traderData.tradeRatios.allowed === resource.type);
      return(
        <Trader
          key={traderData.id}
          name = {traderData.name}
          tradeRatio = {traderData.tradeRatios}
          isUnlocked = {traderData.isUnlocked}
          isBuyable = {traderData.isBuyable}
          handleTrade = {this.handleTrade}
          canTradeWith = {canTradeWith}
         />




        )


    })



    return (
      <div className="App">
        <div className="title">COLOR CLICKER</div>
        <div className="buildingContainer">{buildings}</div>
        <div className="resourceContainer">{resources}</div>
        <div className="clickerContainer">{clickers}</div>
        <div className="scienceContainer"> {sciences}</div>
        <div className="upgradeContainer">{upgrades}</div>
        <div className="traderContainer">{traders}</div>
      </div>
    );
  } 
}
export default App;
