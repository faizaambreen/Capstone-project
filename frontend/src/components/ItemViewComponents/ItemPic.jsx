import React from 'react';
import Description from './Description';

function ItemPic() {
    return (
        <div className="itemPicEtcDiv">
            <div className="PicAreaDiv2">
                <div className="insidePicArea">

                    <div className="PicDiv" >
                        <figure>
                            <img src="https://apollo-singapore.akamaized.net/v1/files/pwilpgen58zs3-PK/image;s=1080x1080" className="figure_img" />
                        </figure>
                        <div className="picNo">
                            5 / 12
                      </div>
                        <div >
                            <span className="Left">
                                <svg width="30px" height="30px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd">
                                    <path d="M684.685 85.333l-407.352 396.501v60.331l407.352 396.501h61.982v-60.331l-376.339-366.336 376.339-366.336v-60.331z"></path>
                                </svg>
                            </span>
                            <span className="Right">
                                <svg width="30px" height="30px" viewBox="0 0 1024 1024" data-aut-id="icon" style={{ marginLeft: '16px' }} fill-rule="evenodd">
                                    <path d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Description />
        </div>
    );
}

export default ItemPic;