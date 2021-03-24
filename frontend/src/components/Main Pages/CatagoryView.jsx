import React, { useState, useEffect, useContext } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import { useParams } from "react-router-dom";
import Item from '../Item';
import ItemListContext from '../../Context/ItemListContext';

function CatagoryView() {
    const { category } = useParams();
    const {list:{ itemList, isLoading }} = useContext(ItemListContext);
    const [countOfItems, setCountOfItems] = useState(13);
    const [priceFilter, setPriceFilter] = useState(false);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    function onLoadClick() {
        setCountOfItems(countOfItems + 12);
    }

    const a = {
        display: 'block'
    }
    return (
        <main className="BetweenHeaderAndFooter">
            <div className="BetweenHeaderAndFooterC1 BetweenHeaderAndFooterC2">
                <div className="CatMainDiv">
                    <div className="insideCatMainDiv">
                        <h1 className="CatHeading">{category}</h1>

                        <div style={{ display: 'flex' }}>
                            <div className="FilterDiv">
                                <div className="insideFilterDiv">
                                    <div>
                                        <div className="FilterHeading"><span>Filters</span></div>
                                        <div className="LocationDiv">
                                            <div className="LocationHeading">
                                                <span className="LocationText">Locations</span>
                                                <svg width="18px" height="18px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd">
                                                    <path class="rui-77aaa" d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path>
                                                </svg>
                                            </div>
                                            <div id="c" className="collapsedContent toVisible">Pakistan</div>
                                            <div id="unc" className=" unCollaspedContent">
                                                <ul className="unCollaspedContentUl">
                                                    <li>
                                                        <span className="unCollaspedContentHeading">Pakistan</span>
                                                        <ul className="unCollaspedDropdownDiv">
                                                            <li>
                                                                <span className="unCollaspedDropdownItem">Punjab</span>
                                                            </li>
                                                            <li>
                                                                <span className="unCollaspedDropdownItem">Sindh</span>
                                                            </li>
                                                            <li>
                                                                <span className="unCollaspedDropdownItem">Balochistan</span>
                                                            </li>
                                                            <li>
                                                                <span className="unCollaspedDropdownItem">Kpk</span>
                                                            </li>
                                                            <li>
                                                                <span className="unCollaspedDropdownItem">Gilgit</span>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="LocationDiv">
                                            <div className="LocationHeading">
                                                <span className="LocationText">Price</span>
                                                <svg width="18px" height="18px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd">
                                                    <path class="rui-77aaa" d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path>
                                                </svg>
                                            </div>

                                            <div className="priceDiv" style={a}>
                                                <div className="priceContentDiv">
                                                    <input
                                                        onChange={(event) => {
                                                            const { value } = event.target;
                                                            setPriceFilter(false);
                                                            setMinPrice(value);
                                                        }}
                                                        type="number"
                                                        name="price|min"
                                                        data-aut-id="filterTextbox"
                                                        placeholder="Min"
                                                        min="0"
                                                        max="1000000"
                                                        value={minPrice}
                                                        class="priceInput"
                                                    />
                                                    <input
                                                        onChange={(event) => {
                                                            const { value } = event.target;
                                                            setPriceFilter(false);
                                                            setMaxPrice(value);
                                                        }}
                                                        type="number"
                                                        name="price|max"
                                                        data-aut-id="filterTextbox"
                                                        placeholder="Max"
                                                        min="0"
                                                        max="1000000"
                                                        value={maxPrice}
                                                        class="priceInput"
                                                    />
                                                    <a className="priceSearch"
                                                        onClick={() => {
                                                            console.log(typeof (itemList[0].price));
                                                            if (minPrice && maxPrice) {
                                                                setPriceFilter(true);
                                                            }
                                                            else {
                                                                setPriceFilter(false);
                                                            }
                                                        }}
                                                    >
                                                        <svg width="16px" height="16px" viewBox="0 0 1024 1024" data-aut-id="icon" fill-rule="evenodd">
                                                            <path class="rui-vUQO_" d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {
                                !isLoading ? <div className="ItemsDiv">
                                    <ul className="ul1 ul2 row">
                                        {
                                            itemList.filter((item) => {
                                                if (priceFilter) {
                                                    return (item.price >= Number(minPrice) &&
                                                        item.price <= Number(maxPrice) &&
                                                        item.category === category);
                                                } else {
                                                    return item.category === category;
                                                }
                                            })
                                                .slice(0, countOfItems)
                                                .map((item) => (
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
                                    <CircularProgress className="catLoading" />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default CatagoryView;