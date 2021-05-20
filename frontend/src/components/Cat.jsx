import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { NavLink } from 'react-router-dom'
import {headerCategoryList, mainAndSubCategories} from '../CategoryList';

function Cat() {
    const [direction, setDirection] = useState(false);
    const [Cls, setCls] = useState("dd1");
    const [Cls1, setCls1] = useState("insideCatListContainer isVisible");

    function CatBlock() {
        return (
            <div>
                {mainAndSubCategories[0].map((heading, index) => {
                    return (
                        <div className="singleCol">
                            <div className="catHeadingDiv">
                                <div to="/catagoryView" className="catHeadingText" style={{ textDecoration: 'none' }}>
                                    <span>{heading}</span>
                                </div>
                            </div>
                            {mainAndSubCategories[index + 1].map((category) => <SubCat name={category} />)}
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

    function invert(e) {
        if (direction === false) {
            setDirection(true);
            setCls("dd1 dd1r");
            setCls1("insideCatListContainer");
        }
        else {
            setDirection(false);
            setCls("dd1 dd1r1");
            setCls1("insideCatListContainer isVisible");
        }
    }

    function outHanddler(e) {
        if (direction === true && e.target.id === "b") {
        }
        else {
            setDirection(false);
            setCls("dd1 dd1r1");
            setCls1("insideCatListContainer isVisible");
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
                                <svg width="24px" id="b" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" >
                                    <path d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path>
                                </svg>
                            </button>
                        </span>

                        <div className="SomeCat">
                            {headerCategoryList.map((x) => <SingleCat name={x} />)}
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