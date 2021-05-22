import React from 'react';

function ItemSeller({ item }) {
    return (
        <div className="itemsSellerDiv">
            <div className="firstDiv">
                <div className="firstDivContent">
                    <section className="firstDivContentSec">
                        <span className="firstDivItemPrice">Rs {item.price.toLocaleString()}</span>
                        <span style={{ "color": "black" }}>PER {item.priceType}</span>
                        <h1 className="firstDivItemTitle">
                            {item.title}
                        </h1>
                        <div className="locationAndDate">
                            <span className="location">{item.city}, {item.state}</span>
                            <span className="Date">{item.createdAt}</span>
                        </div>
                    </section>
                </div>
            </div>
            <div className="firstDiv">
                <div className="firstDivContent">
                    <div className="firstDivContentSec">
                        <div className="SellerDisc">Seller Description</div>
                        <h1 className="firstDivItemTitle" style={{ paddingTop: '20px' }}>
                            {item.ownerName}
                        </h1>
                        <h1 className="firstDivItemTitle" style={{ paddingTop: '20px' }}>
                            {item.phone}
                        </h1>
                    </div>
                </div>
            </div>
            <strong className="AdId">
                AD ID {item._id}
            </strong>
        </div>
    );
}

export default ItemSeller;