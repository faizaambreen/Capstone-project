import React from 'react';

function Description({ description }) {
    return (
        <section className="DiscAreaDiv">
            <div className="insideDiscArea">
                <h3 className="DiscHeading">
                    <span>Description</span>
                </h3>
                <div className="DiscData">
                    <p style={{textAlign:"justify"}}>
                        {description}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Description;