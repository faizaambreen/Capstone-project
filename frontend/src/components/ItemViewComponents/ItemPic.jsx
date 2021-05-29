import React, { useState } from 'react';
import Description from './Description';

function ItemPic({ item }) {
    const [index, setIndex] = useState(0);

    return (
        <div className="itemPicEtcDiv">
            <div className="PicAreaDiv2">
                <div className="insidePicArea">

                    <div className="PicDiv" >
                        <figure>
                            <img src={item.images[index].secure_url} className="figure_img" alt="Pictures"/>
                        </figure>
                        <div className="picNo">
                            {index + 1} / {item.images.length}
                        </div>
                        <div >
                            <span className="Left" onClick={() => {
                                if (index - 1 === -1) {
                                    setIndex(item.images.length - 1);
                                }
                                else {
                                    setIndex(index - 1);
                                }
                            }}>
                                <svg width="30px" height="30px" viewBox="0 0 1024 1024" data-aut-id="icon" fillRule="evenodd">
                                    <path d="M684.685 85.333l-407.352 396.501v60.331l407.352 396.501h61.982v-60.331l-376.339-366.336 376.339-366.336v-60.331z"></path>
                                </svg>
                            </span>
                            <span className="Right" onClick={() => {
                                if (index + 1 === item.images.length) {
                                    setIndex(0);
                                }
                                else {
                                    setIndex(index + 1);
                                }
                            }}>
                                <svg width="30px" height="30px" viewBox="0 0 1024 1024" data-aut-id="icon" style={{ marginLeft: '16px' }} fillRule="evenodd">
                                    <path d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Description description={item.description} />
        </div>
    );

}

export default ItemPic;