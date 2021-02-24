import React from 'react';
import { NavLink } from 'react-router-dom'


function Item(props) {
    const{title,price,city,images,createdAt}=props.itemData;
    return (
        <div className="col-lg-3 col-md-4 col-sm-6">
            <li className="a1 ">
                <NavLink to="/itemView" style={{ textDecoration: 'none' }} >
                    <figure className="figure" >
                        <img className="itemImage" src={images[0].secure_url} />
                    </figure>

                    <div className="itemDis">
                        <span className="itemPrice" >{price}</span>
                        <span className="itemDetails"></span>
                        <span className="itemTitle">{title}</span>
                        <span className="itemLocation">{city}
                            <span className= "itemDate">{createdAt}</span>
                        </span>
                    </div>
                </NavLink>
            </li>
        </div>
    );
}

export default Item;