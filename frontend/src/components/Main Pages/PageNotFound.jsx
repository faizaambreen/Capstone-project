import React from 'react'

export const PageNotFound = ({ flag }) => {
    return (
        <main className="BetweenHeaderAndFooter">
            <div className="BetweenHeaderAndFooterC1 BetweenHeaderAndFooterC2">

                <div className="notFoundMain">
                    <div className="notFound1">
                        <div className="notFoundPic">
                            <picture>
                                <source type="image/webp" srcSet="https://statics.olx.com.pk/external/base/img/404.webp" />
                                <img src="https://statics.olx.com.pk/external/base/img/404.png" alt=""></img>
                            </picture>
                        </div>

                        <div className="notFoundMsg">
                            <div className="notFoundOops">
                                <span>Oops!</span>
                            </div>
                            <div style={{ fontSize: "28px" }}>
                                <span>
                                    "We can't seem to find that."
                        </span>
                            </div>
                            {!flag && <div className="topFooterSectionItem" style={{ cursor: "auto", fontSize: "14px" }}>Error 404</div>}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
