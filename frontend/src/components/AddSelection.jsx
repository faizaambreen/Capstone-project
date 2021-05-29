import React from 'react'
import { Link } from 'react-router-dom'
import { categoryList } from '../CategoryList';

function AddSelection() {

    function PostLi({ name }) {
        const pa = "/postyourad=>" + name;
        return (
            <Link
                onClick={() => { localStorage.setItem("createPost", true); }}
                to={pa}
                style={{ textDecoration: 'none' }}
            >
                <li className="PostLiDiv" >
                    <span
                        className="PostLiContent"
                        style={{ textTransform: "capitalize" }}
                    >{name}</span>
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
                        {categoryList.map((item,index) => <PostLi key={index} name={item} />)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AddSelection;