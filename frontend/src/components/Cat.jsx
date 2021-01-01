import React, { useState } from 'react';
import onClickOutside from "react-onclickoutside";
import {NavLink} from 'react-router-dom'
function Cat() {
    const[direction , setDirection]=useState("down");
    const Catagery=["Houses","Bridal Dresses","Land & Plots","Comercial Shop","Cars","Bikes"];
    const subCatagery1=["Cars","Bikes","Super Cars","SuperBikes","Boats"];
    const subCatagery2=["Luxuary","Average","Economy","Apartmints"];
    const subCatagery3=["Most Expensive","Less Expensive","Average","Below Average"];
    const subCatagery4=["Houses Maid","Plumber","Gardner","Electriction"];
    
    function CatBlock(){
        return(
        <div>
        <div className="singleCol">
                            <div className="catHeadingDiv">
                                <NavLink to="/catagoryView" className="catHeadingText" style={{ textDecoration: 'none' }}>
                                    <span>Vehicles</span>
                                </NavLink>
                            </div>
                            {subCatagery1.map( (x) => <SubCat name= {x}/>)}  
                        </div>
                        <div className="singleCol">
                            <div className="catHeadingDiv">
                                <NavLink to="/catagoryView" className="catHeadingText" style={{ textDecoration: 'none' }}>
                                    <span>Houses</span>
                                </NavLink>
                            </div>
                            {subCatagery2.map( (x) => <SubCat name= {x}/>)}
                        </div>
                        <div className="singleCol">
                            <div className="catHeadingDiv">
                                <NavLink to="/catagoryView" className="catHeadingText" style={{ textDecoration: 'none' }}>
                                    <span>Bridal Dresses</span>
                                </NavLink>
                            </div>
                            {subCatagery3.map( (x) => <SubCat name= {x}/>)}
                        </div>
                         <div className="singleCol">
                            <div className="catHeadingDiv">
                                <NavLink to="/catagoryView" className="catHeadingText" style={{ textDecoration: 'none' }}>
                                    <span>Services</span>
                                </NavLink>
                            </div>
                            {subCatagery4.map( (x) => <SubCat name= {x}/>)}
                        </div> 
        </div>);
    }


    function SingleCat(props){
        return (
            <div className="singleCat">
                <NavLink to="/catagoryView" className="singleCatText" style={{ textDecoration: 'none' }}><span >{props.name}</span></NavLink>
            </div>
        );
    }
    
    function SubCat(props){
        return (
        <div className="subCatDiv">
            <NavLink to="/catagoryView" className="subCatText" style={{ textDecoration: 'none' }}>
                <span>{props.name}</span>
            </NavLink>
        </div>
        );
    }
    
    function invert(){
        if(direction ==="down"){
            setDirection("up")
            document.getElementById("a").classList.add("dd1r");
            document.getElementById("b").classList.remove("insideCatListContainer");
            document.getElementById("b").classList.add("insideCatListContainer1");
        }
        else{
            setDirection("down");
            document.getElementById("a").classList.remove("dd1r");
            document.getElementById("a").classList.add("dd1r1");
            document.getElementById("b").classList.remove("insideCatListContainer1");
            document.getElementById("b").classList.add("insideCatListContainer");
        }
    }
    function dis(){
        setDirection("down");
            document.getElementById("a").classList.remove("dd1r");
            document.getElementById("a").classList.add("dd1r1");
            document.getElementById("b").classList.remove("insideCatListContainer1");
            document.getElementById("b").classList.add("insideCatListContainer");
    }
  return (
    <div className="Cat_container">
      <div className="insideCat">
          <div className="insideCat1">
            <div className="allCat">
                <span className="allCat1">
                    <span>
                        All Categories
                    </span>
                </span>

                <span className="dropdownButton">
                    <button type="button" id="a" onClickOutside={dis} onClick={invert} class="dd1" style={{outline: 'none'}}>
                        <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" >
                            <path d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path>
                        </svg>
                    </button>
                </span>

                <div className="SomeCat">
                    {Catagery.map( (x) => <SingleCat name= {x}/>)}
                </div>
                <div className="catListContainer">
                    <div className="insideCatListContainer" id="b">
                        <CatBlock/>                            
                    </div>
                </div>
            </div>
          </div>
      </div>
    </div>
  );
}
export default Cat;