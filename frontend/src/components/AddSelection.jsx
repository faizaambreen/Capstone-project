import React from 'react'
import { Link } from 'react-router-dom'
import {categoryList} from '../CategoryList';

function AddSelection() {

    function PostLi(props) {
        const pa = "/PostYourAdd=>" + props.name;
        return (
            <Link
                onClick={() => {localStorage.setItem("createPost", true);}}
                to={pa}
                style={{ textDecoration: 'none' }}
            >
                <li className="PostLiDiv" >
                    <span className="PostLiContent">{props.name}</span>
                </li>
            </Link>
        );
    }
    return (
        <div className="PostListDiv">
            <div>
                <h3 className="PostCatHeading">
                    <span>Choose a Catageory</span>
                </h3>
                <div className="ListContainerDiv">
                    <ul className="PostUlDiv">
                        {categoryList.map((item) => <PostLi name={item} />)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AddSelection;