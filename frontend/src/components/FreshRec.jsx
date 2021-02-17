import React from 'react';
import Item from './Item'
function FreshRec(props){
    return (
        <div className="FreshOuterDiv">
            <div className="FreshInnerDiv1 FreshInnerDiv2">
                <div className="FreshHeadingDiv">
                <span>Fresh recommendations</span>
                </div>

                <div>
                    <ul className="ul1 ul2 row"> 
                        <Item 
                            cl="col-lg-3 col-md-4 col-sm-6"
                            imgSrc="https://apollo-singapore.akamaized.net/v1/files/pwilpgen58zs3-PK/image;s=1080x1080"
                            price="Rs 11,000,000"
                            title="something something"
                            details="Hello Kello"
                            location="officer colony"
                        />
                        
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