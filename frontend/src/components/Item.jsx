import React from 'react';
import {NavLink} from 'react-router-dom'


function Item(props){
    const item=props;
    return(
            <div className={props.cl}>
                        <li className="a1 ">
                            <NavLink to="/itemView" style={{textDecoration:'none'}} >
                                <figure className="figure" >
                                <img className="itemImage" src={props.imgSrc}/>
                                </figure>
                                
                                <div className="itemDis">
                                    <span className="itemPrice" >{props.price}</span>
                                    <span className="itemDetails">{props.details}</span>
                                    <span className="itemTitle">{props.title} </span>
                                    <span className="itemLocation">{props.location}</span>
                                </div>
                            </NavLink>
                        </li>
                    </div>
        );
    }

export default Item;