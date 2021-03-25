import React, { useContext } from 'react';
import {useParams, Redirect} from "react-router-dom";
import Form from './FormComponents/Form';
import LoginContext from '../Context/LoginContext';

function AddDetails() {
    const [{isLoggedIn}] = useContext(LoginContext);
    const {category}=useParams();

    if(!isLoggedIn){
        return <Redirect to="/" />;
    }

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