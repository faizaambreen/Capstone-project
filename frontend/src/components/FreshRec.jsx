import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Item from './Item'
import ItemListContext from '../Context/ItemListContext';

function FreshRec() {
    const {list:{itemList,isLoading}} = useContext(ItemListContext);
    const [countOfItems, setCountOfItems] = useState(13);
    
    function onLoadClick() {
        setCountOfItems(countOfItems+12);
    }

    return (
        <div className="FreshOuterDiv" >
            <div className="FreshInnerDiv1 FreshInnerDiv2">
                <div className="FreshHeadingDiv">
                    <span>Fresh Recommendations</span>
                </div>
                {
                    !isLoading ? <div>
                        <ul className="ul1 ul2 row">
                            {
                                itemList.slice(0,countOfItems).map((item) => (
                                    <Item itemData={item} />
                                ))
                            }
                        </ul>
                        <div className="loadDiv">
                            <button onClick={onLoadClick} className="loadBtn">
                                <span>Load More</span>
                            </button>
                        </div>
                    </div>
                    :
                    <div>
                    <CircularProgress className="loading"/>
                    </div>
                }
            </div>
        </div>
    );
}

export default FreshRec;