import React from 'react'

export const PageNotFound = () => {
    return (
    <main className="BetweenHeaderAndFooter">
      <div className="BetweenHeaderAndFooterC1 BetweenHeaderAndFooterC2">

        <div className="notFoundMain">
            <div className="notFound1">
                <div className="notFoundPic">
                    <picture>
                        <source type="image/webp" srcset="https://statics.olx.com.pk/external/base/img/404.webp"/>
                        <img src="https://statics.olx.com.pk/external/base/img/404.png" alt=""></img>
                    </picture>
                </div>
            
                <div className="notFoundMsg">
                    <div className="notFoundOops">
                        <span>Oops!</span>
                    </div>
                    <div className="notFoundOopsMsg">
                        <span>We can't seem to find that.</span>
                        <br/>
                        <span>Try searching for it.</span>
                    </div>
                </div>
            </div>
        </div>    
      </div>
    </main>
    )
}
