import React from 'react';

function ItemSeller() {
    return (
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
                        <h1 className="firstDivItemTitle" style={{ paddingTop: '20px' }}>
                            Marsad Ghanvi form Punjab University College of Infotmation Technology
                      </h1>
                        <h1 className="firstDivItemTitle" style={{ paddingTop: '20px' }}>
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

export default ItemSeller;