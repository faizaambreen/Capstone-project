import React from 'react';
import {NavLink} from 'react-router-dom'


function Item(props){
    return(
            <div className={props.cl}>
                        <li className="a1 ">
                            <NavLink to="/itemView" style={{textDecoration:'none'}} >
                                <figure className="figure" >
                                <img className="itemImage" src="https://apollo-singapore.akamaized.net/v1/files/pwilpgen58zs3-PK/image;s=1080x1080"/>
                                </figure>
                                
                                <div className="itemDis">
                                    <span className="itemPrice" >Rs 11,000,000</span>
                                    <span className="itemDetails">something something</span>
                                    <span className="itemTitle">Hello Kello </span>
                                    <span className="itemLocation">officer colony</span>
                                </div>
                            </NavLink>
                        </li>
                    </div>
        );
    }

export default Item;