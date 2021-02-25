import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Item from '../Item';
import ItemListContext from '../../Context/ItemListContext';

function CatagoryView() {
    const { category } = useParams();
    const { itemList, isLoading } = useContext(ItemListContext);
    const [countOfItems, setCountOfItems] = useState(13);

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
                                                    <input type="number" name="price|min" data-aut-id="filterTextbox" placeholder="Min" min="0" max="100000" value="" class="priceInput" />
                                                    <input type="number" name="price|max" data-aut-id="filterTextbox" placeholder="Max" min="0" max="100000" value="" class="priceInput" />
                                                    <a className="priceSearch" href=".">
                                                        <svg width="16px" height="16px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd">
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
                                !isLoading && <div className="ItemsDiv">
                                    <ul className="ul1 ul2 row">
                                        {
                                            itemList.filter((item) => item.category === category)
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
                            }
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default CatagoryView;