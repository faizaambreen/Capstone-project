import React from 'react';
import Item from './Item'
function FreshRec(){
    return (
        <div className="FreshOuterDiv">
            <div className="FreshInnerDiv1 FreshInnerDiv2">
                <div className="FreshHeadingDiv">
                <span>Fresh recommendations</span>
                </div>

                <div>
                    <ul className="ul1 ul2 row"> 
                        <Item cl="col-lg-3 col-md-4 col-sm-6"/>
                        <Item cl="col-lg-3 col-md-4 col-sm-6"/>
                        <Item cl="col-lg-3 col-md-4 col-sm-6"/>
                        <Item cl="col-lg-3 col-md-4 col-sm-6"/>
                        <Item cl="col-lg-3 col-md-4 col-sm-6"/>
                        <Item cl="col-lg-3 col-md-4 col-sm-6"/>
                        <Item cl="col-lg-3 col-md-4 col-sm-6"/>
                        <Item cl="col-lg-3 col-md-4 col-sm-6"/>
                        <Item cl="col-lg-3 col-md-4 col-sm-6"/>
                        <Item cl="col-lg-3 col-md-4 col-sm-6"/>
                        <Item cl="col-lg-3 col-md-4 col-sm-6"/>
                        <Item cl="col-lg-3 col-md-4 col-sm-6"/>
                        <Item cl="col-lg-3 col-md-4 col-sm-6"/>
                        <Item cl="col-lg-3 col-md-4 col-sm-6"/>
                        <Item cl="col-lg-3 col-md-4 col-sm-6"/>
                        <Item cl="col-lg-3 col-md-4 col-sm-6"/>
                        <Item cl="col-lg-3 col-md-4 col-sm-6"/>
                    </ul>
                </div>
                <div className="loadDiv">
                    <button className="loadBtn">
                        <span>Load More</span>
                    </button>
                </div>
            </div>
            
        </div>
    );
}

export default FreshRec;