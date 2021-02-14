import React from 'react';
import Form from './FormComponents/Form';

function AddDetails() {

    return (
        <main className="BetweenHeaderAndFooter">
            <div className="BetweenHeaderAndFooterC1 BetweenHeaderAndFooterC2">
                <div className="PostAddMainDiv">
                    <h1 className="PostHeading">
                        <span>Post your Add</span>
                    </h1>
                    <Form />
                </div>
            </div>
        </main>
    );
}

export default AddDetails;