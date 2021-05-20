import React, { useContext } from 'react';
import {useParams, Redirect} from "react-router-dom";
import Form from './FormComponents/Form';
import LoginContext from '../Context/LoginContext';

function AddDetails() {
    const [{isLoggedIn}] = useContext(LoginContext);
    const {category}=useParams();
    const createPost = localStorage.getItem("createPost");
    if(!isLoggedIn || !createPost){
        return <Redirect to="/" />;
    }
    localStorage.removeItem("createPost");

    return (
        <main className="BetweenHeaderAndFooter">
            <div className="BetweenHeaderAndFooterC1 BetweenHeaderAndFooterC2">
                <div className="PostAddMainDiv">
                    <h1 className="PostHeading">
                        <span>Post your Add</span>
                    </h1>
                    <Form category={category}/>
                </div>
            </div>
        </main>
    );
}

export default AddDetails;