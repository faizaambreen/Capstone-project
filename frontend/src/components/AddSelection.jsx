import React from 'react'
import {NavLink} from 'react-router-dom'

function AddSelection(){
    const list=["Bikes","Others","Bicycles","Busses","Rikshaws","Boats","Tractors","Generators","UPS","Freezers","Washing Machines & Dryers","Lawns","Hotels","Books","Furniture","IPads","Carpets","Paintings","Curtains","Musical Instruments","Sports Equipment","Cars","Trucks","Mobiles","Web devloper","Internet","House Maids","Flats","Tablets","Houses","Bridal Dresses","Property for Rent","Plumbers","Air Conditioners"];
    list.sort();

    function PostLi(props){
        const pa="/PostYourAdd=>"+props.name;
        return(
            <NavLink exact to={pa} style={{textDecoration:'none'}}>
                <li className="PostLiDiv" >
                    <span className="PostLiContent">{props.name}</span>
                </li>
            </NavLink>
        );
    }
    return(
        <div className="PostListDiv">
            <div>
                <h3 className="PostCatHeading">
                    <span>Choose a Catageory</span>
                </h3>
                <div className="ListContainerDiv">
                    <ul className="PostUlDiv">
                        {list.map((item)=> <PostLi name={item}/>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AddSelection;