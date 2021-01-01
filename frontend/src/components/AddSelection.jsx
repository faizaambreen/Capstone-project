import React from 'react'
import {NavLink} from 'react-router-dom'

function AddSelection(){
    const list=["Vehicals","Houses","Bridal Dresses","Property for Rent","Services","Furniture","Electronic Appliances"];

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