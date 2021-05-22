import React from 'react';
import Cat from './Cat';
function CatDiv() {

    return (
        <div className="Cat_container">
            <div className="insideCat">
                <div className="insideCat1">
                    <div className="allCat">
                        <div className="catListContainer">
                            <div className="insideCatListContainer" id="b">
                                <Cat />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CatDiv;