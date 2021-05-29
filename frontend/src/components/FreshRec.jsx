import React, { useState, useEffect, useContext } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Item from './Item'
import ItemListContext from '../Context/ItemListContext';
import LocationAndSearchContext from '../Context/LocationAndSearchContext';
import { PageNotFound } from './Main Pages/PageNotFound';

function FreshRec() {
    const [{ itemList, isLoading }] = useContext(ItemListContext);
    const [{ location }, setLocationAndSearch] = useContext(LocationAndSearchContext);
    const [filteredList, setFilteredList] = useState([]);
    const [state, setState] = useState("");
    const [countOfItems, setCountOfItems] = useState(13);

    if (!isLoading && location !== state && location !== "Pakistan") {
        setState(location);
        setFilteredList(itemList.filter((item) => item.state === location));
    }

    function onLoadClick() {
        setCountOfItems(countOfItems + 12);
    }

    useEffect(() => {
        setLocationAndSearch({
            location,
            search: ""
        });
    }, []);

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
                                location !== "Pakistan" ? filteredList.length === 0 ?
                                    <PageNotFound flag={true} /> :
                                    filteredList.slice(0, countOfItems).map((item,index) => (
                                        <Item key={index} itemData={item} />
                                    )) : itemList.slice(0, countOfItems).map((item,index) => (
                                        <Item key={index} itemData={item} />
                                    ))
                            }
                        </ul>
                        {(location === "Pakistan" ? itemList : filteredList).length > countOfItems
                            && <div className="loadDiv">
                                <button onClick={onLoadClick} className="loadBtn">
                                    <span>Load More</span>
                                </button>
                            </div>}
                    </div>
                        :
                        <div>
                            <CircularProgress className="loading" />
                        </div>
                }
            </div>
        </div>
    );
}

export default FreshRec;