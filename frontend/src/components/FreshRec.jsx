import React, { useState, useEffect } from 'react';
import Item from './Item'
function FreshRec() {
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);
    const [countOfItems, setCountOfItems] = useState(13);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/categories/:");
            const data = await response.json();
            setItems(data);
            setIsLoading(false);
        }
        fetchData();
    }, [isLoading]);

    function onLoadClick() {
        setCountOfItems(countOfItems+13);
    }

    return (
        <div className="FreshOuterDiv" >
            <div className="FreshInnerDiv1 FreshInnerDiv2">
                <div className="FreshHeadingDiv">
                    <span>Fresh Recommendations</span>
                </div>
                {
                    !isLoading && <div>
                        <ul className="ul1 ul2 row">
                            {
                                items.slice(0,countOfItems).map((item) => (
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
                }
            </div>

        </div>
    );
}

export default FreshRec;