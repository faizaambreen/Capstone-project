import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import {NavLink} from 'react-router-dom'
function Cat() {
    const[direction , setDirection]=useState(false);
    const[Cls , setCls]=useState("dd1");
    const[Cls1 , setCls1]=useState("insideCatListContainer");
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
                                <NavLink to="/catagoryView" onClick={invert} className="catHeadingText" style={{ textDecoration: 'none' }}>
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
            <NavLink to="/catagoryView" onClick={invert} className="subCatText" style={{ textDecoration: 'none' }}>
                <span>{props.name}</span>
            </NavLink>
        </div>
        );
    }

    function invert(){
        if(direction ===false){
            setDirection(true);
            setCls("dd1 dd1r");
            setCls1("insideCatListContainer insideCatListContainer1");
        }
        else{
            setDirection(false);
            setCls("dd1 dd1r1");
            setCls1("insideCatListContainer");
        }
    }
    function outHanddler(){
        if(direction ===true){
            setCls("dd1 dd1r1");
            setCls1("insideCatListContainer");
        }
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
                    <button type="button" onClick={invert} className={Cls} style={{outline: 'none'}}>
                        <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" >
                            <path d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path>
                        </svg>
                    </button>           
                </span>

                <div className="SomeCat">
                    {Catagery.map( (x) => <SingleCat name= {x}/>)}
                </div>
                <div className="catListContainer">
                    <OutsideClickHandler onOutsideClick={outHanddler}>
                    <div className={Cls1}>
                        <CatBlock/>
                    </div>
                    </OutsideClickHandler>

                </div>
            </div>
          </div>
      </div>
    </div>
  );
}
export default Cat;