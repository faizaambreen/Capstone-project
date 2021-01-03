import React from 'react';
import {NavLink} from 'react-router-dom'
function CatDiv(){
    const subCatagery1=["Cars","Bikes","Super Cars","SuperBikes","Boats"];
    const subCatagery2=["Luxuary","Average","Economy","Apartmints"];
    const subCatagery3=["Most Expensive","Less Expensive","Average","Below Average"];
    const subCatagery4=["Houses Maid","Plumber","Gardner","Electriction"];

    function SubCat(props){
        return (
        <div className="subCatDiv">
            <NavLink to="/catagoryView" className="subCatText" style={{ textDecoration: 'none' }}>
                <span>{props.name}</span>
            </NavLink>
        </div>
        );
    }

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
    return(
        <div className="Cat_container">
            <div className="insideCat">
                <div className="insideCat1">
                    <div className="allCat">
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

export default CatDiv;