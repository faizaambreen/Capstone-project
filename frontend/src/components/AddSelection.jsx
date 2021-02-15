import React from 'react'
import {NavLink} from 'react-router-dom'

function AddSelection(){
    const list=["Bike","Busses","Rikshaw","Boats","Tractors","Generators","Ups","Freezer","Washing Machines & dryers","Lawns","Offices","Hotels","Books","Sofas","Beds","Chairs","tables","Mirrors","Carpets","Paintings","Curtains","Musical Instruments","Sports Equipments","Cars","Trucks","Mobiles","House Maids","flats","Tablet","Houses","Bridal Dresses","Property for Rent","Plumbers","Web Devlopers","Furniture","AC on installments"];

    function PostLi(props){
        return(
            <NavLink exact to="/AddDetails" style={{textDecoration:'none'}}>
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