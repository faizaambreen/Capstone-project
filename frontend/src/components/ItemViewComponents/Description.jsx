import React from 'react';

function Description({ description }) {
    return (
        <section className="DiscAreaDiv">
            <div className="insideDiscArea">
                <h3 className="DiscHeading">
                    <span>Description</span>
                </h3>
                <div className="DiscData">
                    <p>
                        {description}
                    </p>
                    {/* <p>We provide all types of cars. Jeeps (luxary cars) <br />
                      We deals in function like, wedding, tourism, pick & Drops, School and college Trips.
                      </p>

                    <p>
                        Toyota Prado<br />Zx10<br />vigo Champ<br />
                    </p> */}
                </div>
            </div>
        </section>
    );
}

export default Description;