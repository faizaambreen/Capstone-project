import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { NavLink } from 'react-router-dom'
function Cat() {
    const [direction, setDirection] = useState(false);
    const [Cls, setCls] = useState("dd1");
    const [Cls1, setCls1] = useState("insideCatListContainer");
    const Catagery = ["Bicycles", "Busses", "Rikshaws", "Boats", "Tractors", "Generators", "UPS", "Freezers", "Washing Machines & Dryers", "Lawns", "Hotels"];
    
    let arr = new Array(6); 
    for (var i = 0; i < 6; i++) {
        arr[i] = []; 
    }

    arr[0] = [ "Vehicles","Cars", "Bikes", "Rikshaws", "Tractors", "Boats", "Busses"];
    arr[1] = [ "Mobiles & Tablates","Mobiles", "Tablates", "iPads"];
    arr[2] = [ "Electrical Aplyances","Generators", "UPS", "Freezers", "Washing Machines & Dryers"];
    arr[3] = ["Property","Hotels","Flats","Houses","Property for Rent"];
    arr[4] = [ "Home Aplyances","Furniture","Carpets","Paintings","Curtains","Musical Instruments","Sports Equipment","Cars","Bridal Dresses"];
    arr[5] = [ "Services","House Maids","Web devloper","Plumbers","internet"];
    

    

    function CatBlock() {
        return (
            <div>
                {arr.map((x)=>{
                    return (
                        <div className="singleCol">
                            <div className="catHeadingDiv">
                                <div to="/catagoryView" className="catHeadingText" style={{ textDecoration: 'none' }}>
                                    <span>{x[0]}</span>
                                </div>
                            </div>
                            {x.filter((y,index) => {return index!==0}).map(a => <SubCat name={a}/>)}
                        </div>
                    );
                })}
            
            </div>);
    }


    function SingleCat(props) {
        const pa = "/CatagoryView=>" + props.name;
        return (
            <div className="singleCat">
                <NavLink to={pa} className="singleCatText" style={{ textDecoration: 'none' }}><span >{props.name}</span></NavLink>
            </div>
        );
    }

    function SubCat(props) {
        const pa = "/CatagoryView=>" + props.name;
        return (
            <div className="subCatDiv">
                <NavLink to={pa} onClick={invert} className="subCatText" style={{ textDecoration: 'none' }}>
                    <span>{props.name}</span>
                </NavLink>
            </div>
        );
    }

    function invert() {
        if (direction === false) {
            setDirection(true);
            setCls("dd1 dd1r");
            setCls1("insideCatListContainer insideCatListContainer1");
        }
        else {
            setDirection(false);
            setCls("dd1 dd1r1");
            setCls1("insideCatListContainer");
        }
    }
    function outHanddler() {
        if (direction === true) {
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
                            <button type="button" onClick={invert} className={Cls} style={{ outline: 'none' }}>
                                <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" >
                                    <path d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path>
                                </svg>
                            </button>
                        </span>

                        <div className="SomeCat">
                            {Catagery.map((x) => <SingleCat name={x} />)}
                        </div>
                        <div className="catListContainer">
                            <OutsideClickHandler onOutsideClick={outHanddler}>
                                <div className={Cls1}>
                                    <CatBlock />
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