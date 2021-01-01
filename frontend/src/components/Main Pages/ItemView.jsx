import React from "react"


function ItemView(props){
  function Disc(){
    return (
      <section className="DiscAreaDiv">
                  <div className="insideDiscArea">
                    <h3 className="DiscHeading"> 
                      <span>Discription</span>
                    </h3>
                    <div className="DiscData">
                      <p>We provide all types of cars. Jeeps (luxary cars) <br/>
                      We deals in function like, wedding, tourism, pick & Drops, School and college Trips.
                      </p>
                       
                      <p>
                      Toyota Prado<br/>Zx10<br/>vigo Champ<br/>
                      </p>
                    </div>
                  </div>
                </section>
    );
  }
  function ItemPic(){
    return(
      <div className="itemPicEtcDiv">
                <div className="PicAreaDiv2">
                  <div className="insidePicArea">

                    <div className="PicDiv" >
                      <figure>
                        <img src="https://apollo-singapore.akamaized.net/v1/files/pwilpgen58zs3-PK/image;s=1080x1080" className="figure_img"/>
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
                          <svg width="30px" height="30px" viewBox="0 0 1024 1024" data-aut-id="icon" style={{marginLeft:'16px'}} fill-rule="evenodd">
                            <path d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <Disc/>
            </div>
    );
  }
  function ItemSeller(){
    return(
      <div className="itemsSellerDiv">
              <div className="firstDiv">
                <div className="firstDivContent">
                  <section className="firstDivContentSec">
                    <span className="firstDivItemPrice">Rs 11,000,000</span>
                    <h1 className="firstDivItemTitle">
                      Car on Rent in all over Pakistan
                    </h1>
                    <div className="locationAndDate">
                      <span className="location">Bahria Town Rawalpindi, Rawalpindi, Punjab</span>
                      <span className="Date">12 Dec</span>
                    </div>
                  </section>
                </div>
              </div>
              <div className="firstDiv">
                <div className="firstDivContent">
                  <div className="firstDivContentSec">
                    <div className="SellerDisc">Seller description</div>
                      <h1 className="firstDivItemTitle" style={{paddingTop:'20px'}}>
                        Marsad Ghanvi form Punjab University College of Infotmation Technology
                      </h1>
                      <h1 className="firstDivItemTitle" style={{paddingTop:'20px'}}>
                        0304-4244748
                      </h1>
                    </div>
                </div>
              </div>
                <strong className="AdId">
                  AD ID 1024690075
                </strong>
            </div>
    );
  }
    return(
        <main className="BetweenHeaderAndFooter">
        <div className="BetweenHeaderAndFooterC1 BetweenHeaderAndFooterC2">
          <div className="itemViewDiv1 itemViewDiv2">
            <ItemPic/>
            <ItemSeller/>
          </div>
        </div>
      </main>
    );
}

export default ItemView;

//https://apollo-singapore.akamaized.net/v1/files/zkrhb7la93c5-PK/image;s=1080x1080