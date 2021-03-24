import React, { Component, useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import AddSelection from '../AddSelection'
import LoginContext from '../../Context/LoginContext';

function PostYourAdd(){
    const [{isLoggedIn}] = useContext(LoginContext);
    if(!isLoggedIn){
        return <Redirect to="/" />
    }
    return(
        <main className="BetweenHeaderAndFooter">
            <div className="BetweenHeaderAndFooterC1 BetweenHeaderAndFooterC2">
                <div className="PostAddMainDiv">
                    <h1 className="PostHeading">
                        <span>Post your Add</span>
                    </h1>
                    <AddSelection/>      
                </div>
            </div>
        </main>
    );
}

export default PostYourAdd;