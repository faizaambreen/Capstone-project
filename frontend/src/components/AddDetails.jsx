import React from 'react';
import {useParams} from "react-router-dom";
import Form from './FormComponents/Form';

function AddDetails() {

    const {cat}=useParams();
    return (
        <main className="BetweenHeaderAndFooter">
            <div className="BetweenHeaderAndFooterC1 BetweenHeaderAndFooterC2">
                <div className="PostAddMainDiv">
                    <h1 className="PostHeading">
                        <span>Post your Add</span>
                    </h1>
                    <Form cate={cat}/>
                </div>
            </div>
        </main>
    );
}

export default AddDetails;