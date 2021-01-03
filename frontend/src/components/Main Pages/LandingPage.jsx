import React from 'react';
import BackgroundImage from '../BackgroundImage'
import FreshRec from '../FreshRec'

function LandingPage(){
    return (
      <main className="BetweenHeaderAndFooter">
        <div className="BetweenHeaderAndFooterC1 BetweenHeaderAndFooterC2">
          <BackgroundImage/>
          <FreshRec/>
        </div>
      </main>
    );
}

export default LandingPage;