import React, { useState } from 'react'
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from 'react-router-dom';

function Ads({ item, id, onChecked }) {
  const [disabled, setDisabled] = useState(false);
  const [i, seti] = useState();
  function disable() {
    setDisabled(true);
    onChecked(id);
  }
  function enable() {
    setDisabled(false);
    seti(id);
  }
  return (
    <div style={{ display: "flex" }}>
      <div className="allAdds">
        <div>
          <ul className="myAddUl">
            <div className="myAddA" style={{ position: "relative", display: "flex" }}>
                <div className="dateDiv">
                  <span className="line"></span>
                  <div className="dateDiv_1">
                    <div className="dateDiv_2">
                      <span>Dated:
                              <strong style={{ paddingLeft: "4px" }}><br></br>{item.createdAt}</strong>
                      </span>

                    </div>
                  </div>
                </div>

                <div className="addDiv">
                  <div className="addDiv_1">
                    <Link to={`itemView=>${item._id}`} style={{ color:"black", textDecoration: "none" }} className="addDiv_2">
                      <div className="addDiv_2_1">
                        <figure className="addDiv_2_1_fig">
                          <img src={item.images[0].secure_url} alt="" className="fig_img" />
                        </figure>
                      </div>
                      <div className="addDiv_2_2">
                        <div className="addDiv_2_2_1 addDiv_2_2_span">
                          <span>
                            {item.title}
                          </span>
                        </div>
                      </div>
                      <div className="addDiv_2_3 addDiv_2_3_span">
                        <span>
                          Rs {item.price} / {item.priceType}
                        </span>
                      </div>
                      <div className="addDiv_2_4">
                        <label className="addDiv_2_4_lable"> Active</label>
                      </div>
                      {/* <div className="addDiv_2_5">
                            <div className="addDiv_2_5_1">
                              <span>
                                The ad is currently live
                              </span>
                            </div>
                          </div> */}
                    </Link>
                    <OutsideClickHandler onOutsideClick={enable}>
                      <div className="addDiv_3" onClick={disable}>
                        <div className="addDiv_3_1">
                          <span className="addDiv_3_span" >
                            <img alt="" src="https://img.icons8.com/material-rounded/24/000000/delete-forever.png" />
                          </span>
                        </div>
                      </div>
                    </OutsideClickHandler>
                  </div>
                </div>
            </div>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Ads;