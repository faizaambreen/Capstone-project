import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import AddSelection from '../AddSelection'

function PostYourAdd(props){
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