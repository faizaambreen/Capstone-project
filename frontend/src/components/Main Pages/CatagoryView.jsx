import React, { useState, useEffect, useContext } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import { useParams } from "react-router-dom";
import Item from '../Item';
import ItemListContext from '../../Context/ItemListContext';
import LocationAndSearchContext from '../../Context/LocationAndSearchContext';
import { PageNotFound } from "./PageNotFound";
import { categoryList } from '../../CategoryList';

function CatagoryView() {
    const { category } = useParams();

    const [{ itemList, isLoading }] = useContext(ItemListContext);
    const [{ location, search }, setLocationAndSearch] = useContext(LocationAndSearchContext);
    const [currentCategory, setCurrentCategory] = useState("");
    const [list, setList] = useState([]);
    const [filteredList, setFilteredList] = useState(null);
    const [countOfItems, setCountOfItems] = useState(13);
    const [priceFilter, setPriceFilter] = useState(false);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [loc, setLoc] = useState("collapsedContent toVisible");
    const [sloc, setSloc] = useState("unCollaspedContent isVisible");
    const [ro, setRo] = useState("");

    if (!isLoading && currentCategory !== category) {
        setCurrentCategory(category);
        if (categoryList.includes(category.toLowerCase())) {
            setLocationAndSearch({
                location,
                search: ""
            });
            setList(itemList.filter((item) => item.category === category.toLowerCase()));
        }
        else {
            setLocationAndSearch({
                location,
                search: category
            });
            setList(itemList.filter((item) => (
                item.title.toLowerCase().includes(category.toLowerCase())
            )));
        }
    }

    function onLoadClick() {
        setCountOfItems(countOfItems + 12);
    }

    const a = {
        display: 'block'
    }
    function drop() {
        if (loc === "collapsedContent toVisible" && sloc === "unCollaspedContent isVisible") {
            setLoc("collapsedContent");
            setSloc("unCollaspedContent");
            setRo("ro");
        } else {
            setLoc("collapsedContent toVisible");
            setSloc("unCollaspedContent isVisible");
            setRo("");
        }
    }
    function locationValue({ currentTarget: { innerText } }) {
        setLocationAndSearch({
            location: innerText,
            search
        });
        drop();
    }

    useEffect(() => {
        if (priceFilter && location !== "Pakistan") {
            setFilteredList(list.filter((item) => (
                item.price >= Number(minPrice) &&
                item.price <= Number(maxPrice) &&
                item.state === location)));
        }
        else if (priceFilter) {
            setFilteredList(list.filter((item) => (
                item.price >= Number(minPrice) &&
                item.price <= Number(maxPrice))));
        }
        else if (location !== "Pakistan") {
            setFilteredList(list.filter((item) => (
                item.state === location)));
        }
        else {
            setFilteredList(null);
        }
    }, [priceFilter, location]);

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
                                            <div className="LocationHeading" onClick={drop}>
                                                <span className="LocationText">Locations</span>
                                                <div className={ro}>
                                                    <svg width="18px" className="ro" height="18px" viewBox="0 0 1024 1024" data-aut-id="icon" fillRule="evenodd">
                                                        <path className="rui-77aaa" d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className={loc}>{location}</div>
                                            <div className={sloc}>
                                                <ul className="unCollaspedContentUl">
                                                    <li>
                                                        <span className="unCollaspedContentHeading">{location}</span>
                                                        <ul className="unCollaspedDropdownDiv">
                                                            <li onClick={locationValue}>
                                                                <span className="unCollaspedDropdownItem">Pakistan</span>
                                                            </li>
                                                            <li onClick={locationValue}>
                                                                <span className="unCollaspedDropdownItem">Punjab</span>
                                                            </li>
                                                            <li onClick={locationValue}>
                                                                <span className="unCollaspedDropdownItem">Sindh</span>
                                                            </li>
                                                            <li onClick={locationValue}>
                                                                <span className="unCollaspedDropdownItem">Balochistan</span>
                                                            </li>
                                                            <li onClick={locationValue}>
                                                                <span className="unCollaspedDropdownItem">KPK</span>
                                                            </li>
                                                            <li onClick={locationValue}>
                                                                <span className="unCollaspedDropdownItem">Gilgit</span>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="LocationDiv">
                                            <div className="LocationHeading">
                                                <span className="LocationText">Price
                                                    <span style={{
                                                        textTransform: "none",
                                                        fontSize: "14px"
                                                    }}>   (Rs.)
                                                    </span>
                                                </span>

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
                                                        className="priceInput"
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
                                                        className="priceInput"
                                                    />
                                                    <a className="priceSearch"
                                                        onClick={() => {
                                                            if (minPrice && maxPrice) {
                                                                setPriceFilter(true);
                                                            }
                                                            else {
                                                                setPriceFilter(false);
                                                            }
                                                        }}
                                                    >
                                                        <svg width="16px" height="16px" viewBox="0 0 1024 1024" data-aut-id="icon" fillRule="evenodd">
                                                            <path className="rui-vUQO_" d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path>
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
                                            (filteredList ? filteredList : list).length === 0 ? <PageNotFound flag={true} />
                                                : (filteredList ? filteredList : list)
                                                    .slice(0, countOfItems)
                                                    .map((item,index) => (
                                                        <Item key={index} itemData={item} />
                                                    ))
                                        }
                                    </ul>
                                    {(filteredList ? filteredList : list).length > countOfItems
                                        && <div className="loadDiv">
                                            <button onClick={onLoadClick} className="loadBtn">
                                                <span>Load More</span>
                                            </button>
                                        </div>}
                                </div>
                                    :
                                    <CircularProgress className="loading" />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default CatagoryView;