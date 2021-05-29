import React from 'react';
import rentImage from "../images/rent.jpg";

function BackgroundImage() {
    return (
        <section>
            <div className="BackgroundImgDiv">
                <div className="BackgroundImg" style={{ backgroundImage: `url(${rentImage})` }}>
                </div>
            </div>
        </section>
    );
}

export default BackgroundImage;
