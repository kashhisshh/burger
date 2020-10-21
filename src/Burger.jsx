import React, { Component } from "react";         
 class Burger extends Component{
    state={
        meat:0,
        salad:0,
        cheese:0,
        bacon:0

    }
    addremove=(action,items)=>{
        let {
            meat,
            salad,
            cheese,
            bacon
        }=this.state;
        let statevalue;
        switch(items)
        {
            case 'meat':{
                statevalue=meat;
                break;
            }
            case 'salad':{
                statevalue=salad;
                break;
            }
            case 'cheese':{
                statevalue=cheese;
                break;                                               
            }
            case 'bacon':{
                statevalue=bacon;
                break;
            }
            default :break;
        }
        if(action==='add')
        {
            statevalue=statevalue+1;
        }
        else
        {
            statevalue=statevalue-1;
        }
        this.setState({
            [items]:statevalue>=0?statevalue:0
        });
        }
 buns=()=>{
     let {meat,salad,cheese,bacon}=this.state;
     let burger=[];
     for(let i=0;i<meat;i++)
     {
         burger.push(<div key={burger.length} className="Meat"></div>)
     }
     for(let i=0;i<salad;i++)
     {
         burger.push(<div key={burger.length} className="Salad"></div>)
     }
     for(let i=0;i<cheese;i++)
     {
         burger.push(<div key={burger.length} className="Cheese"></div>)
     }
     for(let i=0;i<bacon;i++)
     {
         burger.push(<div key={burger.length} className="Bacon"></div>)
     }
     return burger;
 }
 
    render()
    {
return(
    <>
    <div class="container">
  <div class="row">
    <div class="col">


      <div className="burger">
    <div className="card1">
    <div className="Seeds1"></div>  
        <div className="Seeds2"></div>
    </div>
    {this.buns()}
       
    <div className="card2"></div>
    </div>
    <div class="col">
      
    
    
    
        <div className="burgering">
            <p>Meat</p>
            <button onClick={()=>{ this.addremove("add","meat")}} className="butt">ADD</button>
            <button onClick={()=>{ this.addremove("less","meat")}} className="butt">LESS</button>
        </div>
        <div className="burgering">
            <p>salad</p>
            <button onClick={()=>{ this.addremove("add","salad")}} className="butt">ADD</button>
            <button onClick={()=>{ this.addremove("less","salad")}} className="butt">LESS</button>
        </div>
        <div className="burgering">
            <p>cheese</p>
            <button onClick={()=>{ this.addremove("add","cheese")}} className="butt">ADD</button>
            <button onClick={()=>{ this.addremove("less","cheese")}} className="butt">LESS</button>
        </div>
        <div className="burgering">
            <p>bacon</p>
            <button onClick={()=>{ this.addremove("add","bacon")}} className="butt">ADD</button>
            <button onClick={()=>{ this.addremove("less","bacon")}} className="butt">LESS</button>
        </div></div> </div>
  </div></div>
    </>
)}

    }export default Burger;