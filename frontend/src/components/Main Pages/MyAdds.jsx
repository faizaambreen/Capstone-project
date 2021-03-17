import React, { useState } from 'react'
import OutsideClickHandler from "react-outside-click-handler";
function MyAdds() {

  const [v, setV] = useState("isVisible");
  const [disabled, setDisabled] = useState(false);
  function clearOP() {
    setV("isVisible");
    setDisabled(false);
  }
  function op() {
    setDisabled(true);
    setV("");
  }
  return (
    <main className="BetweenHeaderAndFooter">
      <div className="BetweenHeaderAndFooterC1 BetweenHeaderAndFooterC2">
        <h1 style={{ marginLeft: "1%" }}>My Ads</h1>
        <section className="Section_myAdd">

          <div style={{ display: "flex" }}>
            <div className="allAdds">
              <div>
                <ul className="myAddUl">
                  <a href={disabled ? 'javascript:void(0)' : 'j'} className="myAddA" style={{ textDecoration: "none", textDecorationColor: "none" }}>
                    <div style={{ position: "relative", display: "flex" }}>
                      <div className="dateDiv">
                        <span className="line"></span>
                        <div className="dateDiv_1">
                          <div className="dateDiv_2">
                            <span>From:
                              <strong style={{ paddingLeft: "4px" }}>Mar 11, 21</strong>
                            </span>
                            <span>To:
                              <strong style={{ paddingLeft: "4px" }}>April 10, 21</strong>
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="addDiv">
                        <div className="addDiv_1">
                          <div className="addDiv_2">
                            <div className="addDiv_2_1">
                              <figure className="addDiv_2_1_fig">
                                <img src="https://apollo-singapore.akamaized.net/v1/files/dnlthyvrijte3-PK/image;s=600x1200;q=60" alt="" className="fig_img" />
                              </figure>
                            </div>
                            <div className="addDiv_2_2">
                              <div className="addDiv_2_2_1 addDiv_2_2_span">
                                <span>
                                  Mate 10 Lite
                              </span>
                              </div>
                            </div>
                            <div className="addDiv_2_3 addDiv_2_3_span">
                              <span>
                                Rs 15,000
                            </span>
                            </div>
                            <div className="addDiv_2_4">
                              <label className="addDiv_2_4_lable"> Active</label>
                            </div>
                            <div className="addDiv_2_5">
                              <div className="addDiv_2_5_1">
                                <span>
                                  The ad is currently live
                              </span>
                              </div>
                            </div>
                          </div>

                          <div className="addDiv_3">
                            <div className="addDiv_3_1">
                              <span className="addDiv_3_span" >
                                <img src="https://img.icons8.com/fluent-systems-filled/24/000000/dots-loading.png" onClick={op} />
                              </span>
                              <OutsideClickHandler onOutsideClick={clearOP} >
                                <div className={v} style={{ pointerEvent: "none" }}>
                                  <div className="addOp">
                                    <ul className="addOp_ul">
                                      <li className="addOp_li">
                                        Remove
                                    </li>
                                      <li className="addOp_li">
                                        Deactivate
                                    </li>
                                    </ul>
                                  </div>
                                </div>
                              </OutsideClickHandler>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </a>


                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default MyAdds;
